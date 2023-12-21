// document.querySelector('#search').addEventListener('input', filterList);
// function filterList(){
//     const searchInput = document.querySelector('#search');
//     const filter = searchInput.value.toLowerCase();
//     const listItems = document.querySelectorAll('h2');
    
//     listItems.forEach((item)=> {
//         let text = item.textContent;
//         if(text.toLowerCase().includes(filter.toLowerCase)){
//             item.style.display = '';
//         }
//         else {
//             item.style.display = 'none';
//         }
//     })
// }

const url = "https://cms.istad.co/api/cstad-courses?populate=%2A"
const getData = async() => {
    const data = await fetch(url)
    const result = await data.json()
    return result
}
const {data:courses} = await getData() 
console.log(courses)
const backend_courses = courses.filter(course=>course?.attributes?.category?.data?.attributes?.name == "Back-end development")
const design_courses = courses.filter(course=>course?.attributes?.category?.data?.attributes?.name == "Design")
const program_courses = courses.filter(course=>course?.attributes?.category?.data?.attributes?.name == "Programming Language")
const database_courses = courses.filter(course=>course?.attributes?.category?.data?.attributes?.name == "Database")
const web_courses = courses.filter(course=>course?.attributes?.category?.data?.attributes?.name == "Web Development")
const app_courses = courses.filter(course=>course?.attributes?.category?.data?.attributes?.name == "App Development")
const cyber_courses = courses.filter(course=>course?.attributes?.category?.data?.attributes?.name == "Cyber Security")

backend_courses && console.log(backend_courses, design_courses, program_courses, database_courses, web_courses, app_courses, cyber_courses)
const cat_backend = document.getElementById("backend")
for(let course of backend_courses){
console.log(cat_backend)
const backend_card = document.createElement("a")
backend_card.classList = "max-w-xl bg-white overflow-hidden shadow-lg rounded-2xl flex flex-col sm:flex-row hover:scale-[1.1] duration-300";
backend_card.innerHTML = `
                        <div class="w-5/6 p-4">
                        <h2 class="text-xl pl-4 font-semibold mb-4 text-blue-800" style="font-size: 24px">${course.attributes.name}</h2>
                        <span
                          class="inline-block pl-4 text-center  text-sm align-baseline leading-none  rounded-full py-1 px-3 bg-red-600 text-white hover:bg-red-700 pb-1 font-bold"
                          style="font-size: 16px;">${course.attributes.discount}% Scholarship
                        </span>
                        <p class="text-gray-700 pt-3 pl-4">${course.attributes.description.slice(0,64)}...</p>
                        <p class="text-gray-700 pt-3 pl-4"><i class='bx bxs-hourglass-top'></i>${course.attributes.duration} hours<span
                            class="text-gray-700 pt-3 pl-4"><i class='bx bxs-layer'></i>Advanced</span>
                        </p>
                      </div>
                      <!-- Image on the left side -->
                      <div class="w-1/2 flex items-center justify-center">
                        <img src=${course.attributes.logo.data.attributes.url} alt="Image"
                          class="w-4/5 object-cover">
                      </div>
`
cat_backend.appendChild(backend_card)
}
