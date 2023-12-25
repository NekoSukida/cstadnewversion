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
// document.querySelector("#search").addEventListener("input", filterList);

// function filterList() {
//   const searchInput = document.querySelector("#search");
//   const filter = searchInput.value.toLowerCase();
//   const listContainer = document.querySelector(".list-container"); // Adjust the selector to match your container
//   const listItems = document.querySelectorAll("h2");

//   listItems.forEach((item) => {
//     let text = item.textContent.toLowerCase();
//     if (text.indexOf(filter) !== -1) {
//       // Move matching item to the top by detaching and reattaching
//       listContainer.prepend(item);
//       item.style.display = "block"; // or any other appropriate display value
//     } else {
//       item.style.display = "none";
//     }
//   });
// }




const url = "https://cms.istad.co/api/cstad-courses?populate=%2A";
const getData = async () => {
  const data = await fetch(url);
  const result = await data.json();
  return result;
};
const { data: courses } = await getData();
console.log(courses);
const backend_courses = courses.filter(
  (course) =>
    course?.attributes?.category?.data?.attributes?.name ==
    "Back-end development"
);
const design_courses = courses.filter(
  (course) => course?.attributes?.category?.data?.attributes?.name == "Design"
);
const program_courses = courses.filter(
  (course) =>
    course?.attributes?.category?.data?.attributes?.name ==
    "Programming Language"
);
const database_courses = courses.filter(
  (course) => course?.attributes?.category?.data?.attributes?.name == "Database"
);
const web_courses = courses.filter(
  (course) =>
    course?.attributes?.category?.data?.attributes?.name == "Web Development"
);
const app_courses = courses.filter(
  (course) =>
    course?.attributes?.category?.data?.attributes?.name == "App Development"
);
const cyber_courses = courses.filter(
  (course) =>
    course?.attributes?.category?.data?.attributes?.name == "Cyber Security"
);

backend_courses &&
  console.log(
    backend_courses,
    design_courses,
    program_courses,
    database_courses,
    web_courses,
    app_courses,
    cyber_courses
  );

// get all section
const cat_backend = document.getElementById("backend");
const cat_database = document.getElementById("database");
const cat_programming = document.getElementById("programming");
const cat_web = document.getElementById("web");
const cat_app = document.getElementById("app");
const cat_cyber = document.getElementById("cyber");
const cat_design = document.getElementById("design");

// all data and categories
const all_courses = [
  [backend_courses, cat_backend],
  [database_courses, cat_database],
  [program_courses, cat_programming],
  [web_courses, cat_web],
  [app_courses, cat_app],
  [cyber_courses, cat_cyber],
  [design_courses, cat_design],
];

for (let course of all_courses) {
  for (let each_course of course[0]) {
    const card = document.createElement("a");
    console.log(each_course.attributes.courseOffers.split(","))
    card.setAttribute("href", `
    coursedetail.html?id=${each_course.id}
    `)
    card.classList =
      "max-w-xl bg-white overflow-hidden shadow-lg rounded-2xl flex flex-col sm:flex-row hover:scale-[1.1] duration-300";
    card.innerHTML = `
                        <div class="w-5/6 p-4">
                        <h2 class="text-xl pl-4 font-semibold mb-4 text-blue-800" style="font-size: 24px">${
                          each_course.attributes.name
                        }</h2>
                        <span
                          class="inline-block pl-4 text-center  text-sm align-baseline leading-none  rounded-full py-1 px-3 bg-red-600 text-white hover:bg-red-700 pb-1 font-bold"
                          style="font-size: 16px;">20% Scholarship
                        </span>
                        <p class="text-gray-700 pt-3 pl-4">${each_course.attributes.description.slice(
                          0,
                          64
                        )}...</p>
                        <p class="text-gray-700 pt-3 pl-4"><i class='bx bxs-hourglass-top'></i>${
                          each_course.attributes.duration
                        } hours<span
                            class="text-gray-700 pt-3 pl-4"><i class='bx bxs-layer'></i>Advanced</span>
                        </p>
                      </div>
                      <!-- Image on the left side -->
                      <div class="w-1/2 flex items-center justify-center">
                        <img src=${
                          "https://cms.istad.co/uploads/"+
                          each_course.attributes.logo.data.attributes.formats.small.hash+".png"
                        } alt="Image"
                          class="w-4/5 object-cover">
                      </div>
`;
    course[1].appendChild(card);
  }
}
