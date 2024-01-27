//Question one 
function findSquare() {
  const num = document.getElementById('numInput').value;
  const result = num * num;
  const text = document.getElementById('text');
  text.innerHTML = `The square of ${num} equals to ` + result;

}
findSquare()

//Question 2
function calFahrenheit() {
    const num1 = document.getElementById('celsius').value;
    const result1 = (num1 * 9/5 ) + 32;
    const texts = document.getElementById('text1');
    texts.innerHTML = `The Fahrenheit value of ${num1} equals to ` + result1;
  
  }
  calFahrenheit()

  //Question three
  function circleValues() {
    const num2 = document.getElementById('radius').value;
    const area = 22/7 * (num2 * num2);
    const perimeter = 2 * 22/7 * num2 ;
    const textArea = document.getElementById('text2');
    const textPerimeter = document.getElementById('text2a');
    textArea.innerHTML = `The area of the circle with radius ${num2} equals to ` + area;
    textPerimeter.innerHTML = `The area of the circle with radius ${num2} equals to ` + perimeter ;
  
  }
  circleValues()

  //Question four

  function simpleInt() {
    const pri1 = document.getElementById('pr1').value;
    const pri2 = document.getElementById('pr2').value;
    const pri3 = document.getElementById('pr3').value;
    const ans = (pri1 * pri2 * pri3 ) / 100;
    const simpleInterest = document.getElementById('text3');
    simpleInterest.innerHTML = `The simple interest based on the pricipal of ${pri1} , rate of ${pri2} and time of ${pri3} equals to ` + ans;
    
  
  }
  simpleInt()

  //Question five

  function rectangleArea() {
    const leng1 = document.getElementById('length').value;
    const widt2 = document.getElementById('width').value;
    const answ = (leng1 * widt2  ) ;
    const areaOfRectangle = document.getElementById('text4');
    areaOfRectangle.innerHTML = `The  area of a given Rectangle of length ${leng1}  and width of ${widt2} equals to ` + answ;
    
  
  }
  rectangleArea()