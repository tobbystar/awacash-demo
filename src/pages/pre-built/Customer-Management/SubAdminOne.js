
import levelone from "./Levelone";

function SubAdminOne (props) {
  return(
    <div class="m-2 py-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4">
      <img/>
      <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg text-black font-semibold">{props.firstname}</p>
          <p className="text-lg text-black font-semibold">{props.lastname}</p>
          <p className="text-lg text-black font-semibold">{props.Middlename}</p>
          <p className="text-lg text-black font-semibold">{props.email}</p>
          <p className="text-lg text-black font-semibold">{props.phone}</p>
          <p className="text-lg text-black font-semibold">{props.bvn}</p>
          <p className="text-lg text-black font-semibold">{props.dob}</p>
          <p className="text-lg text-black font-semibold">{props.address}</p>
        </div>
      </div>
    </div>
  );
}

export default SubAdminOne;