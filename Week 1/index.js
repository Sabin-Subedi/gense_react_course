// 2. Create a function called calcCircumfrence:
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN"

// 2 Answer
function calcCircumfrence(radius){
    const circumference = 2 * 3.14 * radius
    
   return circumference.toFixed(2)
}
document.getElementById('CalculateCircumference').addEventListener('click',function(){
    const value =calcCircumfrence(document.getElementById('radius').value)
    console.log( value)
    document.getElementById('answer-2').innerHTML = `<p>The circumference is <strong>${value}cm</strong></p>`
})


// 3. Following is an Array of my favorite places and some two favorite place and remove            Kathmandu from the list and also print the array with its length.
//                  ["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"]

// 3 Answer

const favouritePlace = ["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"];

favouritePlace.splice(favouritePlace.indexOf('Kathmandu'),1,'Bhaktapur','Lumbini')
console.log(favouritePlace.length, favouritePlace)

document.getElementById('answer-3').innerHTML = `
Array: ${favouritePlace}<br>
length: ${favouritePlace.length}<br>
New AddedValue: Bhaktapur,Lumbini
`

// 4. Make simple Tip Calculator to calculate tips. User should be able to add total amount and tip percentage he/shw want to give.
function TipCalculator(){
    const toatlAmount =document.getElementById('bill').value
    const tipPercent = document.getElementById('tip_percent').value

    const tipAmount = toatlAmount * (tipPercent/100)

    document.getElementById('answer-4').innerHTML = `
    <p><strong>Total Amount:</strong>Rs.${toatlAmount}</p>
    <p><strong>Tip Percentage:</strong>${tipPercent}%</p>
    <p><strong>Tip Amount:</strong>Rs.${tipAmount}</p>
    `
}

document.getElementById('CalculateTip').onclick = TipCalculator