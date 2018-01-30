function grading(marks) {
  var nextMultiple = marks
  for (i = 0; i < 5; i++) {
    if (nextMultiple % 5 == 0) {
      break;
    }
    else {
      nextMultiple++
    }
  }
  if (marks < 38) {
    return marks
  }
  else if ((nextMultiple - marks) < 3) {
    marks = nextMultiple
    return marks
  }
}

document.write(grading(37))