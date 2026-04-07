// Event handler for radio button selection

function laptopChoice(choice) {

  switch (choice) {
    
    case 1:
      alert("High performance laptop with powerful GPU for gaming");
      break;

    case 2:
      alert("Reliable laptop with security features for office work");
      break;

    case 3:
      alert("Affordable laptop suitable for students and learning");
      break;

    case 4:
      alert("Lightweight and slim laptop with long battery life");
      break;

    default:
      alert("Invalid selection");
      break;
  }
}