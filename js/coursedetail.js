const url = "https://cms.istad.co/api/cstad-courses?populate=%2A";
const getData = async () => {
  const data = await fetch(url);
  const result = await data.json();
  return result;
};
const { data: courses } = await getData();


const param = new URLSearchParams(document.location.search)
const course_id = param.get("id")
const current_course = courses.find(course => course.id === parseInt(course_id))
console.log(current_course.attributes.courseOffers
                  .split(","))
document.title = current_course.attributes.name
const detail = document.getElementById("detail")
detail.innerHTML = `
<div class="flex flex-wrap">
            <div class="md:w-3/4 pr-4 pl-4 w-full">
              <div class="course-offer-item">
                <h2 class="course-offer pt-4 pl-2 font-bold">${
                  current_course.attributes.name
                }</h2>
                <p class="pl-2">
                  <span>${current_course.attributes.description}</span>
                </p>
                <h5 class="pt-6 pb-6 pl-2 font-bold text-2xl">Course Offer</h5>
                <ol class="pl-6 pb-2 ml-4">
                ${current_course.attributes.courseOffers
                  .split(",")
                  .filter(item=>item!=",")
                  .map(
                    (item) => `<li type="1">${item}</li>`
                  ).join('')
                }
        
                </ol>
                <p></p>

                <!-- Discount -->
                <h3 class="pl-2 my-4 text-red-600 text-2xl font-bold">20% Scholarship</h3>

                <!-- Course Fee -->
                <p class="pl-2">Fee :
                  <del class="text-red-600 font-bold strikethrough">$ ${current_course.attributes.fee}.0</del>
                  <span
                    class="inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded rounded-full py-1 px-3 bg-red-600 text-white  p-2 font-bold"
                    style="font-size: 16px;">$ ${current_course.attributes.discount}</span>
                </p>

                <p class="pl-2">Duration :
                  <span class="text-red-600 font-bold">${current_course.attributes.duration}</span>

                  <span class="text-red-600 font-bold" style="text-transform: lowercase;">hours</span>
                </p>

              </div>

            </div>
            <div class="w-full md:w-1/4 pr-4 pl-4 flex justify-center flex-col items-center">
              <div class="flex-item">
                <span class="icon-course">
                  <img src=${
                    "https://cms.istad.co/uploads/"+
                          current_course.attributes.logo.data.attributes.formats.small.hash+".png"
                        }
                    alt="C++ Programming" class="w-full p-12">
                </span>
              </div>

            </div>
          </div>
`;
