class Driver {
  constructor(name, dateStr) {
    this.name = name
    this.startDate = new Date(dateStr)
  }

  yearsExperienceFromBeginningOf(yearStr) {
    const endYear = new Date(yearStr)
    return endYear.getFullYear() - this.startDate.getFullYear()
  }
}

const EAST_WEST = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Route {
  constructor(beginingLocation, endingLocation) {
    this.beginingLocation = beginingLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    const verticalBlocks = Math.abs(this.beginingLocation.vertical - this.endingLocation.vertical)
    const horizontalBlocks = Math.abs(EAST_WEST.indexOf(this.beginingLocation.horizontal) - EAST_WEST.indexOf(this.endingLocation.horizontal))
    return verticalBlocks + horizontalBlocks
  }

  estimatedTime(isPeak = false) {
    return isPeak
      ? this.blocksTravelled() / 2
      : this.blocksTravelled() / 3
  }
}