async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  

  for (let i = 0; i < json.rides.length; i++) {
    let rides = json.rides[i]
    let outputElement = document.querySelector('.rides')
    outputElement.insertAdjacentHTML('beforeend', `
      <div class="p-4 w-full md:w-1/2 lg:w-1/3">
        <div class="border h-full p-4 flex flex-col">
          <h2 class="text-lg font-bold mb-4">${product.name}</h2>
          <div class="mb-4"><img src=${product.image}>
          </div>
          <div class="mb-4 text-gray-900">${product.description}</div>
          <div class="mt-auto text-purple-500 text-2xl">${product.price}</div>
        </div>
      </div>
      
      
    `)
  }

  // 🔥 start here: write code to loop through the rides
  
}

window.addEventListener('DOMContentLoaded', pageLoaded)

