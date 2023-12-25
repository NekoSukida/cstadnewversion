const url = "https://cms.istad.co/api/cstad-courses?populate=%2A";
const getData = async () => {
  const data = await fetch(url);
  const result = await data.json();
  return result;
};
const { data: courses } = await getData();
console.log(courses);

const pic1 = "asset/svg/Binary code-pana.svg";
const pic2 = "./asset/svg/web.jpg";
const pic3 = "./asset/svg/database.jpg";
const pic4 = "./asset/svg/design.jpg";
const pic5 = "./asset/svg/app1.jpg";
const pic6 = "./asset/svg/cyber1.jpg";

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

const cate_pic = [
  ["Programming Languages", program_courses, pic1],
  ["Design", design_courses, pic2],
  ["Database Management System", database_courses, pic3],
  ["Web Development", web_courses, pic4],
  ["App Development", app_courses, pic5],
  ["Cyber Security", cyber_courses, pic6],
];

const div_ctn = document.getElementById("div_ctn")

 for (let eachCourse of cate_pic){
    const div = document.createElement("div")
    div.classList =
      "duration-300 hover:scale-[1.1] w-full max-w-sm  h-72 rounded-lg bg-white";
    div.innerHTML = `
    <a class="relative">
                <img
                  class="p-0 rounded-t-lg h-72 "
                  src="${eachCourse[2]}"
                  alt="Programming"
                  />
                  <div class="flex items-center justify-between absolute z-10 p-3 top-0">
                    <h5 class="text-lg font-semibold tracking-tight text-black">
                      ${eachCourse[0]}
                      <span class="block font-normal text-sm">${
                        eachCourse[1].length
                      } ${eachCourse[1].length > 1 ? "Courses" : "Course"}</span>
                  </h5>
                  </div>
              </a>
    `;
    div_ctn.appendChild(div)
    div.addEventListener("click", ()=> popUp(eachCourse[1], div_ctn))
 }

 function popUp(course , el){
const wrapper = document.createElement("div")
const wrap_card = document.createElement("div");
wrap_card.classList = `bg-[#f5f5f5] p-10 gap-x-32 gap-y-24 rounded-md w-fit grid grid-cols-${
  course.length > 3 ? 3 : course.length
}`;
wrapper.classList = "fixed z-[99] top-0 left-0 w-full h-screen pop-up flex items-center justify-center"
for(let c of course){
  const card = document.createElement("div")

  card.innerHTML = `
  
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src=${
          "https://cms.istad.co/uploads/" +
          c.attributes.logo.data.attributes.formats.small.hash +
          ".png"
        } alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${
              c.attributes.name
            }</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${
          c.attributes.description.slice(0,100)
        }...</p>
        <a href="/course/coursedetail.html?id=${c.id}" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Course Detail
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>


  `;
  wrap_card.appendChild(card)
  wrapper.appendChild(wrap_card)
}


el.appendChild(wrapper)

  console.log(course, el)
  wrapper.addEventListener("click", ()=> wrapper.remove())
 }
 