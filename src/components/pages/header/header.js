import React, { useState } from "react";

import { Anchor, Drawer, Button } from "antd";

import "./header.css";
const { Link } = Anchor;
function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <img
            src="https://raw.githubusercontent.com/winterofcode/winterofcode2020/master/src/Assets/org-logo.png"
            style={{ height: 40, width: 40 }}
            data-aos="slide-up"
            alt="winter of code"
          />
          <a href="https://winterofcode.com">Winter Of Code</a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="https://dscnsec.com" title="DSC NSEC" />
            <Link href="#about" title="About" />
            <Link href="#organisations" title="Organisations" />
            <Link href="#organisers" title="Organisers" />
            <Link href="#faq" title="FAQ" />
            <Link href="#reports" title="Student Reports" />
            <Link href="#contact" title="Contact" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="https://dscnsec.com" title="DSC NSEC" />
              <Link href="#about" title="About" />
              <Link href="#organisations" title="Organisations" />
              <Link href="#organisers" title="Organisers" />
              <Link href="#faq" title="FAQ" />
              <Link href="#reports" title="Student Reports" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
