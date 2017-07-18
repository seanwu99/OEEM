(function (factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory;
    } else {
        factory(Highcharts);
    }
}(function (Highcharts) {

    'use strict';

    var addEvent = Highcharts.addEvent,
        each = Highcharts.each,
        pick = Highcharts.pick;


    /**
     * Filter by dragMin and dragMax
     */
    function filterRange(newY, series, XOrY) {
        var options = series.options,
            dragMin = pick(options['dragMin' + XOrY], undefined),
            dragMax = pick(options['dragMax' + XOrY], undefined),
            precision = pick(options['dragPrecision' + XOrY], undefined);

        if (!isNaN(precision)) {
            newY = Math.round(newY / precision) * precision;
        }

        if (newY < dragMin) {
            newY = dragMin;
        } else if (newY > dragMax) {
            newY = dragMax;
        }
        return newY;
    }


    Highcharts.Chart.prototype.callbacks.push(function (chart) {

        var container = chart.container,
            dragPoint,
            dragStart,
            dragX,
            dragY,
            dragPlotX,
            dragPlotY,
            dragPlotHigh,
            dragPlotLow,
            changeLow,
            newHigh,
            newLow;

        /**
         * Get the new values based on the drag event
         */
        function getNewPos(e) {
            var originalEvent = e.originalEvent || e,
                pageX = originalEvent.changedTouches ? originalEvent.changedTouches[0].pageX : e.pageX,
                pageY = originalEvent.changedTouches ? originalEvent.changedTouches[0].pageY : e.pageY,
                series = dragPoint.series,
                draggableX = series.options.draggableX && dragPoint.draggableX !== false,
                draggableY = series.options.draggableY && dragPoint.draggableY !== false,
                dragSensitivity = pick(series.options.dragSensitiviy, 1),
                deltaX = draggableX ? dragX - pageX : 0,
                deltaY = draggableY ? dragY - pageY : 0,
                newPlotX = dragPlotX - deltaX,
                newPlotY = dragPlotY - deltaY,
                newX = dragX === undefined ? dragPoint.x : series.xAxis.toValue(newPlotX, true),
                newY = dragY === undefined ? dragPoint.y : series.yAxis.toValue(newPlotY, true),
                ret;

            newX = filterRange(newX, series, 'X');
            newY = filterRange(newY, series, 'Y');
            if (dragPoint.low) {
                var newPlotHigh = dragPlotHigh - deltaY,
                    newPlotLow = dragPlotLow - deltaY;
                newHigh = dragY === undefined ? dragPoint.high : series.yAxis.toValue(newPlotHigh, true);
                newLow = dragY === undefined ? dragPoint.low : series.yAxis.toValue(newPlotLow, true);
                newHigh = filterRange(newHigh, series, 'Y');
                newLow = filterRange(newLow, series, 'Y');
            }
            if (Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2)) > dragSensitivity) {
                return {
                    x: draggableX ? newX : dragPoint.x,
                    y: draggableY ? newY : dragPoint.y,
                    high: (draggableY && !changeLow) ? newHigh : dragPoint.high,
                    low: (draggableY && changeLow) ? newLow : dragPoint.low,
                };
            } else {
                return null;
            }
        }

        /**
         * Handler for mouseup
         */
        function drop(e) {
            var newPos;
            if (dragPoint) {
                if (e) {
                    newPos = getNewPos(e);
                    if (newPos) {
                        dragPoint.update(newPos);

                        // Update k-d-tree immediately to prevent tooltip jump (#43)
                        dragPoint.series.options.kdNow = true;
                        dragPoint.series.buildKDTree();
                    }
                }
                if (newPos) {
                    newPos.dragStart = dragStart;
                    dragPoint.firePointEvent('drop', newPos);
                }
            }
            dragPoint = dragX = dragY = undefined;
        }

        /**
         * Handler for mousedown
         */
        function mouseDown(e) {
            var options,
                originalEvent = e.originalEvent || e,
                hoverPoint,
                series;

            if ((originalEvent.target.getAttribute('class') || '').indexOf('highcharts-handle') !== -1) {
                hoverPoint = originalEvent.target.point;
            }

            series = chart.hoverPoint && chart.hoverPoint.series;
            if (!hoverPoint && chart.hoverPoint) {
                hoverPoint = chart.hoverPoint;
            }

            if (hoverPoint) {
                options = hoverPoint.series.options;
                dragStart = {};
                if (options.draggableX && hoverPoint.draggableX !== false) {
                    dragPoint = hoverPoint;
                    dragX = originalEvent.changedTouches ? originalEvent.changedTouches[0].pageX : e.pageX;
                    dragPlotX = dragPoint.plotX;
                    dragStart.x = dragPoint.x;
                }

                if (options.draggableY && hoverPoint.draggableY !== false) {
                    dragPoint = hoverPoint;

                    dragY = originalEvent.changedTouches ? originalEvent.changedTouches[0].pageY : e.pageY;
                    dragPlotY = dragPoint.plotY + (chart.plotHeight - (dragPoint.yBottom || chart.plotHeight));
                    dragStart.y = dragPoint.y;
                    if (dragPoint.plotHigh) {
                        dragPlotHigh = dragPoint.plotHigh;
                        dragPlotLow = dragPoint.plotLow;
                        changeLow = (Math.abs(dragPlotLow - (dragY - 60)) < Math.abs(dragPlotHigh - (dragY - 60))) ? true : false;
                    }
                }
                console.log('dragStart');
                console.log(dragStart.x);
                console.log(dragStart.y);

                // Disable zooming when dragging
                if (dragPoint) {
                    chart.mouseIsDown = false;
                }
            }
        }

        /**
         * Handler for mousemove. If the mouse button is pressed, drag the element.
         */
        function mouseMove(e) {

            if (dragPoint) {

                e.preventDefault();

                var evtArgs = getNewPos(e), // Gets x and y
                    proceed;

                // Fire the 'drag' event with a default action to move the point.
                if (evtArgs) {
                    evtArgs.dragStart = dragStart;
                    dragPoint.firePointEvent(
                        'drag',
                        evtArgs,
                        function () {

                            var kdTree,
                                series = dragPoint.series;

                            proceed = true;

                            dragPoint.update(evtArgs, false);

                            // Hide halo while dragging (#14)
                            if (series.halo) {
                                series.halo = series.halo.destroy();
                            }

                            // Let the tooltip follow and reflect the drag point
                            if (chart.tooltip) {
                                chart.tooltip.refresh(chart.tooltip.shared ? [dragPoint] : dragPoint);
                            }

                            // Stacking requires full redraw
                            if (series.stackKey) {
                                chart.redraw();

                                // Do a series redraw only. Let the k-d-tree survive the redraw in order to
                                // prevent tooltip flickering (#43).
                            } else {

                                kdTree = series.kdTree;
                                series.redraw();
                                series.kdTree = kdTree;
                            }
                        }
                    );


                    // The default handler has not run because of prevented default
                    if (!proceed) {
                        drop();
                    }
                }
            }
        }

        // Kill animation on first drag when chart.animation is set to false.
        chart.redraw();

        // Add'em
        addEvent(container, 'mousemove', mouseMove);
        addEvent(container, 'touchmove', mouseMove);
        addEvent(container, 'mousedown', mouseDown);
        addEvent(container, 'touchstart', mouseDown);
        addEvent(document, 'mouseup', drop);
        addEvent(document, 'touchend', drop);
        addEvent(container, 'mouseleave', drop);
    });


}));
