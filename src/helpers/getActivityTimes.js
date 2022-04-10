export function getActivityTimes(time, activityData) {
  return activityData
    .map(activity => activity.timeframes[time.toLowerCase()])
}