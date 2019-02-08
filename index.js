function addComment(){
  var bodyText = "This research is bold and important!";
  var commenter = "Definitely not a woodchuck looking to eat the wood";

  var commentBody = createCommentBody(bodyText);
  var commenterLabel = createCommenterLabel(commenter);
  postNewComment(commentBody, commenterLabel);
}

function createCommentBody(comment) {
  var bodyDiv = document.createElement("div");
  var bodyPara = document.createElement("p");
  bodyPara.innerHTML = comment;
  bodyDiv.appendChild(bodyPara);
  return bodyDiv;
}


function createCommenterLabel(commenter){
  var commentDiv = document.createElement ("div");
  var commentLabel = document.createElement("p");
  commenterLabel.innerHTML = "posted by: ";
  var commenterName = document.createElement("span");
  commenterName.innerHTML = commenter;
  commenterLabel.appendChild(commenterName);
  commenterDiv.appendChild(commenterLabel);
  return commentDiv;
}

function postNewComment(body, commenter) {
  var commentsDiv = document.createElement("comments");
  var newCommmentDiv = document.createElement("div");
  newCommentDiv.appendChild(body);
  newCommentDiv.appendChild(commenter);
  commentsDiv.appendChild(newCommentDiv);
}

function addComment() {
  event.preventDefault();
  var bodyText = document.getElementById("commentText").value;
  var commenter = document.getElementById("commenterName").value;

  var commentBody = createCommentBody(bodyText);
  var commenterLabel = createCommenterLabel(commenter);
  postNewComment(commentBody, commenterLabel);
}
