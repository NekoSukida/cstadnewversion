const url = "https://cms.istad.co/api/cstad-announcements?populate=%2A";
const getData = async () => {
  const data = await fetch(url);
  const result = await data.json();
  return result;
};
const { data: jobs } = await getData();
console.log(jobs);
const param = new URLSearchParams(document.location.search)
const id = param.get("id")
console.log(id)
const current_job = jobs.find(job=>job.id=== parseInt(id))
const job_detail = document.getElementById("job-detail")
job_detail.innerHTML = `
<div class="max-w-6xl mx-auto bg-white p-6 rounded-3xl shadow-md">
        <!-- Title -->
        <h2 class="job-offer text-xl sm:text-2xl md:text-2xl lg:text-3xl mb-4 text-blue-900 font-normal md:font-bold"><span class="job-offer-khmer">${
          current_job.attributes.title
        }</h2>

        <!-- Icon -->
        <div class="sm:block md:inline-block text-blue-900 text-sm pt-4">
          <!-- Author -->
          <i class="fas fa-user i-style pl-4"></i>
          <span class="content-detail-info pl-2">Boss</span>
          <!-- End Author -->
      
          <!-- Publish Date -->
          <i class="fas fa-clock i-style pl-4"></i>
          <span class="content-detail-info pl-2">23-Nov-2023</span>
          <!-- End Publish Date -->
      
          <!-- View -->
          <i class="fas fa-eye i-style pl-4"></i>
          <span class="content-detail-info pl-2">919</span>
          <!-- End View -->
        </div>
      
        <!-- Type -->
        <div class="sm:block md:inline-block text-blue-900 text-sm pb-4">
          <i class="fa fa-folder i-style pl-4"></i>
          <span class="content-detail-info pl-2">Job Announcement</span>
        </div>
        <!-- End Type -->

        <!-- Image -->
        <img src=${
          "https://cms.istad.co/uploads/" +
          current_job.attributes.thumbnail.data.attributes.formats.small.hash +
          ".png"
        } alt="" class="mb-4 w-full h-auto rounded-md">
  
        <!-- Text -->
        <h2 class="job-offer-khmer text-xl sm:text-2xl md:text-2xl lg:text-3xl mb-4 font-semibold"><ul class="pl-6 pb-2 ml-4">
                ${current_job.attributes.content
                  .split(",")
                  .filter((item) => item != ",")
                  .map((item) => `<li type="1">${item}</li>`)
                  .join("")}
        
                </ul></h2>
        
        
        
        <p class="pt-3 pb-3" style="font-size: 16px;" >"Start your first IT career with ISTAD"</p>

        <!-- Scroll Back Btn -->
        <section class="flex justify-end pt-4">
          <button id="goToTopButton" class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 ease-in-out">
            Scroll Back
          </button>
        </section>
        <!-- End of Scroll Back -->

      </div>
`;