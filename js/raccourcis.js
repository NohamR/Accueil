// // auto-open-details.js

// function getDetails(mouseEvent) {
//     let target = mouseEvent.target
//     if (target.tagName === 'SUMMARY') {
//       target = target.parentNode
//     }
//     if (target.tagName !== 'DETAILS') {
//       return  // Using return without a value will return the value undefined.
//     }
//     return target
//   }
  
  
//   (
//     ()=>{
//       const detailsCollection = document.getElementsByTagName('details')
  
//       for (let [key, details] of Object.entries(detailsCollection)){
//         details.onmouseover = (mouseEvent) => {
//           const target = getDetails(mouseEvent)
//           if (typeof target != "undefined") {
//             target.open = true
//           }
//         }   
//       }
      
//       document.addEventListener('mouseover', (mouseEvent)=>{
//         for (let [key, details] of Object.entries(detailsCollection)){
//           if (details.matches(':hover')){
//              return // Don't use "continue" since its subelement needs to show.
//           }
//           details.open = false
//         }
//       })  
//     }
//   )();