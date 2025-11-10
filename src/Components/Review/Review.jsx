// import Ratio from "react-bootstrap/Ratio";
// import { Link } from "react-router-dom";

// const Review = () => {
//   return (
//     <div className="container-fluid">
//       <div className="header text-center w-75 mx-auto mt-5">
//         <h2 className="fw-bold">Member’s Review</h2>
//         <p>
//           We are 100% trustworthy that’s why our members only have great things
//           to say about us.{" "}
//           <Link to={"/register"} href="#">
//             Join us
//           </Link>{" "}
//           today and secure your future through our savings and investment
//           feature.
//         </p>
//       </div>
//       <div className="container-fluid">
//         <div className="row justify-content-center mt-4 gy-3">
//           <div className="farming">
//             <h3 className="text-center mb-4">Agrovest 2024 farming season</h3>
//           </div>
//           <div className="col-lg-4 col-md-6 col-sm-12">
//             <div className="card border-0">
//               <Ratio aspectRatio="4x3" className="rounded-5 bg-dark">
//                 <iframe  loading="lazy" src="https://player.vimeo.com/video/1130653301?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="100%" height="656" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" title="VID-20251020-WA0009"></iframe>
//               </Ratio>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 col-sm-12">
//             <div className="card border-0">
//               <Ratio aspectRatio="4x3" className="rounded-5 bg-dark">

//                 <iframe  loading="lazy" src="https://player.vimeo.com/video/1130653262?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="480" height="848" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" title="VID-20251020-WA0008"></iframe>
//               </Ratio>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 col-sm-12">
//             <div className="card border-0">
//               <Ratio aspectRatio="4x3" className="bg-dark rounded-5">

//                 <iframe  loading="lazy" src="https://player.vimeo.com/video/1130653235?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="368" height="656" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" title="VID-20251020-WA0007"></iframe>
//               </Ratio>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 col-sm-12">
//             <div className="card border-0">
//               <Ratio aspectRatio="4x3" className="rounded-5 bg-dark">
//                 <iframe  loading="lazy" src="https://player.vimeo.com/video/1130653207?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="480" height="848" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" title="VID-20251020-WA0006"></iframe>
//               </Ratio>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 col-sm-12">
//             <div className="card border-0">
//              <iframe  loading="lazy" src="https://player.vimeo.com/video/1130653182?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="368" height="656" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" title="VID-20251020-WA0005"></iframe>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 col-sm-12">
//             <div className="card border-0">
//               <Ratio aspectRatio="4x3" className="rounded-5 bg-dark">
//               <iframe  loading="lazy" src="https://player.vimeo.com/video/1130653159?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="368" height="672" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" title="VID-20251020-WA0004"></iframe>
//               </Ratio>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Review;



import Ratio from "react-bootstrap/Ratio";
import { Link } from "react-router-dom";

const videos = [
  "https://player.vimeo.com/video/1130653301",
  "https://player.vimeo.com/video/1130653262",
  "https://player.vimeo.com/video/1130653235",
  "https://player.vimeo.com/video/1130653207",
  "https://player.vimeo.com/video/1130653182",
  "https://player.vimeo.com/video/1130653159",
];

const Review = () => {
  return (
    <div className="container-fluid">
      <div className="header text-center w-75 mx-auto mt-5">
        <h2 className="fw-bold">Member’s Review</h2>
        <p>
          We are 100% trustworthy that’s why our members only have great things
          to say about us.{" "}
          <Link to="/register">
            Join us
          </Link>{" "}
          today and secure your future through our savings and investment
          feature.
        </p>
      </div>

      <div className="row justify-content-center mt-4 gy-3">
        <div className="farming">
          <h3 className="text-center mb-4 fw-bold">Agrovest 2024 farming season</h3>
        </div>
          {videos.map((url, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 px-4">
              <div className="card border-0">
                <Ratio aspectRatio="4x3" className="rounded-5 bg-dark">
                  <iframe
                    loading="lazy"
                    src={url}
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    title={`Vimeo Video ${index + 1}`}
                    style={{ border: 0, borderRadius: "10px" }}
                  ></iframe>
                </Ratio>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Review;
