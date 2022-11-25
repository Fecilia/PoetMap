import * as d3 from 'd3'

// 函数format（）主要用于格式化规范显示日期
// d3.timeDay()用于以“yyyy-mm-dd”格式返回日期
function format(date) {
  if (d3.timeDay(date) < date) {
    return d3.timeFormat('%I:%M')(date)
  }

  if (d3.timeMonth(date) < date) {
    return d3.timeFormat('%b %d')(date)
  }

  if (d3.timeYear(date) < date) {
    return d3.timeFormat('%B')(date)
  }

  return d3.timeFormat('%Y')(date)
}
// 导出配置详情信息
export default (config) => selection => {
  let {
    timeScale,
    height,
  } = config
// d3.selectAll(selector)选择与指定的选择器匹配的所有元素，元素按照定义顺序被选中
  let axe = selection.selectAll('.axe').data(d => d)

  let ay = d3.axisBottom()
    .scale(timeScale)
    .tickFormat(d => format(d))

  axe.enter()
    .append('g')
    .attr('transform', `translate(0, ${height + 5})`)
    .classed('axe', true)
    .style('stroke-width', 1)
    .style('stroke', 'white')
    .call(ay)

  axe.call(ay)
}
