
const verify = (json) => {
    if(json == null) return false
    if(json.event == null) return false
    if(json.priority == null) return false
    return true
}

module.exports = { verify }