// export default function BgComp({ bg, children }) {
//   return (
//     <div className="relative isolate bg-white">
//       {/* Lightened background image ONLY */}
//       <img
//         src={bg}
//         alt=""
//         aria-hidden
//         className="
//           absolute inset-0 z-0 w-full h-full object-cover pointer-events-none select-none
//           invert             
//           brightness-[1.6]   
//           contrast-[0.9]     
//           opacity-[0.25]     
//         "
//       />
//       {/* Foreground content stays crisp */}
//       <div className="relative z-10">
//         {children}
//       </div>
//     </div>
//   );
// }