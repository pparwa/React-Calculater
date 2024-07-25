import Button from "./Utils/Button";
import './keyPage.css'

export default function KeyPage({handelnumber,handelsum}) {
  return (
    <div className="keyPage-Container">
      <div className="keyBox">
        <Button type="number" text="1" handelnumber={handelnumber} />
        <Button type="number" text="2" handelnumber={handelnumber} />
        <Button type="number" text="3" handelnumber={handelnumber} />
        <Button type="number" text="4" handelnumber={handelnumber} />
        <Button type="number" text="5" handelnumber={handelnumber} />
        <Button type="number" text="6" handelnumber={handelnumber} />
        <Button type="number" text="7" handelnumber={handelnumber} />
        <Button type="number" text="8" handelnumber={handelnumber} />
        <Button type="number" text="9" handelnumber={handelnumber} />
        <Button type="number" text="0" handelnumber={handelnumber} />
      </div>
      <div className="oppBox">
        <Button type="opp" text="+" handelnumber={handelnumber} />
        <Button type="opp" text="-" handelnumber={handelnumber} />
        <Button type="opp" text="*" handelnumber={handelnumber} />
        <Button type="opp" text="/" handelnumber={handelnumber} />
        <Button type="opp" text="="  handelnumber={handelsum}/>
      </div>
    </div>
  );
}
