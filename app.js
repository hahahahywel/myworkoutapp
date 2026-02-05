// app.js snippet
function saveSet(exercise, weight, reps) {
    const workout = {
        date: new Date().toLocaleDateString(),
        exercise: exercise,
        weight: weight,
        reps: reps
    };
    
    // Get existing logs or start a new list
    let history = JSON.parse(localStorage.getItem('workoutHistory')) || [];
    history.unshift(workout); // Add new workout to the top
    
    // Save back to the phone
    localStorage.setItem('workoutHistory', JSON.stringify(history));
}