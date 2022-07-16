const Footer = () => {
  return (
    <div className="footer-wrapper text-center pb-5 pt-20">
       <div className=" row justify-evenly pb-10 w-full gap-5">
      <script src="https://cdn.lordicon.com/xdjxvujz.js" type="module"></script>
      <div className="email text-center flex-[0_0_auto] w-full md:w-5/12 xl:w-2/12">
        <div>
        <lord-icon
        src="https://cdn.lordicon.com/itykargr.json"
        trigger="morph"
        colors="primary:#8000ff"
      ></lord-icon>
      <h4 className="font-semibold pb-4">Email Us</h4>
      <a href="mailto:info@thekingsassembly.org" >mailto:info@thekingsassembly.org</a>
        </div>
      </div>
      <div className="phone text-center flex-[0_0_auto] w-full md:w-5/12 xl:w-2/12">
      <lord-icon
        src="https://cdn.lordicon.com/cnyeuzxc.json"
        trigger="morph"
        colors="primary:#8000ff"
      ></lord-icon>
       <h4 className="font-semibold pb-4">Call Us</h4>
       <a href="tel:+234 817 298 0000" >+234 817 298 0000</a>
      </div>
      <div className="address text-center flex-[0_0_auto] w-full md:w-5/12 xl:w-2/12">
      <lord-icon
        src="https://cdn.lordicon.com/igpbsrza.json"
        trigger="morph"
        colors="primary:#8000ff"
      ></lord-icon>
       <h4 className="font-semibold pb-4">Make us your home</h4>
       <a href="https://www.google.com/maps/place/58 Tombia Extension, GRA Phase 3 Port Harcourt/@4.8241953,6.9943585,17z"  target="_blank">Tombia Extension, GRA Phase 3 Port Harcourt</a>
      </div>
      <div className="card text-center flex-[0_0_auto] w-full md:w-5/12 xl:w-2/12">
      <lord-icon
        src="https://cdn.lordicon.com/zwhkzizg.json"
        trigger="morph"
        colors="primary:#8000ff"
      ></lord-icon>{" "}
       <h4 className="font-semibold pb-4">Give an offering</h4>
       <a href="#" >Give Online</a>
      </div>   
    </div>
    <h3 className="font-bold">© 2022 The King's Assembly</h3>
    </div>
  );
};
export default Footer;
