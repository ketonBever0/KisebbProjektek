import toast, { Toaster } from "react-hot-toast"


import Notify from "../../../Functions";

function ByName() {


  return (
    <div>
      <button className="btn btn-ghost" onClick={() => Notify.tSuccess("Siker!")}>Siker Toast</button>
      <button className="btn btn-ghost" onClick={() => Notify.tError("Fail!")}>Fail Toast</button>





    </div>
  )
}

export default ByName