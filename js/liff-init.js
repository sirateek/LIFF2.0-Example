liff.init({liffId: liffId}, () => {}, (err) => {window.alert(err)})
if (liff.isLoggedIn()){
    liff.getProfile().then((profile) => {
    document.getElementById("profileImage").src = profile.pictureUrl
    document.getElementById("userId").innerHTML = profile.userId
    document.getElementById("displayName").innerHTML = profile.displayName
    document.getElementById("statusMessage").innerHTML = profile.statusMessage
    document.getElementById("pictureUrl").href = profile.pictureUrl
    document.getElementById("pictureUrl").innerHTML = profile.pictureUrl

  })
} else {
    document.getElementById("userId").innerHTML = "No data, Login first"
    document.getElementById("displayName").innerHTML = "No data, Login first"
    document.getElementById("statusMessage").innerHTML = "No data, Login first"
    document.getElementById("pictureUrl").innerHTML = "No data, Login first"
}

document.getElementById("getOS").innerHTML = liff.getOS()
document.getElementById("getLanguage").innerHTML = liff.getLanguage()
document.getElementById("getVersion").innerHTML = liff.getVersion()
document.getElementById("isInClient").innerHTML = liff.isInClient()
document.getElementById("isLoggedIn").innerHTML = liff.isLoggedIn()
var context = liff.getContext()
if (context !== null){
  document.getElementById("context_type").innerHTML = "type: " + context.type
  document.getElementById("context_viewType").innerHTML = "viewType: " + context.viewType
  document.getElementById("context_userId").innerHTML = "userId: " + context.userId
  document.getElementById("context_utouId").innerHTML = "utouId: " + context.utouId
  if (context.utouId){
    document.getElementById("context_utouId").innerHTML = "roomId: " + context.utouId
  } else {
    document.getElementById("context_utouId").innerHTML = "roomId: You are not in the utou"
  }
  if (context.roomId){
    document.getElementById("context_roomId").innerHTML = "roomId: " + context.roomId
  } else {
    document.getElementById("context_roomId").innerHTML = "roomId: You are not in the room"
  }
  if (context.groupId){
    document.getElementById("context_groupId").innerHTML = "groupId: " + context.groupId
  } else {
    document.getElementById("context_groupId").innerHTML = "groupId: You are not in the group "
  }
} else {
  document.getElementById("context_type").innerHTML = "type: No data."
  document.getElementById("context_viewType").innerHTML = "viewType: No data."
  document.getElementById("context_userId").innerHTML = "userId: No data."
  document.getElementById("context_utouId").innerHTML = "utouId: No data."
  document.getElementById("context_roomId").innerHTML = "roomId: No data." 
  document.getElementById("context_groupId").innerHTML = "groupId: No data."
}