import { useState } from "react";
import { BiLineChart } from "react-icons/bi";
import { BsBox, BsTruck } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { GiSlaveryWhip, GiTakeMyMoney } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { SlPeople } from "react-icons/sl";
import { Link } from "react-router-dom";

import ChangeTheme from "../ChangeTheme";
import Container from "./style";

export default function SideBar() {
  const [show, setShow] = useState(false);

  return (
    <Container className={show ? "show" : ""}>
      <div className="other" onClick={() => setShow(false)}></div>
      <aside className={`sideBar ${show ? "open" : "close"}`}>
        <div className="toogle">
          <span onClick={() => setShow(!show)}>
            {!show ? <FaBars /> : <IoClose />}
          </span>
        </div>
        <nav className="navigate" onClick={() => setShow(false)}>
          <ul>
            <li>
              <Link to="/">
                <span>
                  <BiLineChart />
                </span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span>
                  <GiTakeMyMoney />
                </span>
                <span>Vendas</span>
              </Link>
            </li>
            <li>
              <Link to="/inventario">
                <span>
                  <BsBox />
                </span>
                <span>Estoque</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span>
                  <BsTruck />
                </span>
                <span>Fornecedores</span>
              </Link>
            </li>
            <li>
              <Link to="/clientes">
                <span>
                  <SlPeople />
                </span>
                <span>Clientes</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span>
                  <GiSlaveryWhip />
                </span>
                <span>Funcionários</span>
              </Link>
            </li>
          </ul>
        </nav>
        <footer className="sideFooter">
          <ChangeTheme />
        </footer>
      </aside>
    </Container>
  );
}
