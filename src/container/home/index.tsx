import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Styled from "./style";
import Header from "@/components/header";
import { Col, Row, Image } from "antd";
const Home = (): JSX.Element => {
  const demoData = [
    {
      icon: "/tiger-demo.png",
      alt: "tiger",
    },
    {
      icon: "esport-demo.png",
      alt: "esport",
    },
    {
      icon: "phone-demo.png",
      alt: "phone",
    },
    {
      icon: "movie-demo.png",
      alt: "movie",
    },
    {
      icon: "advertiser-demo.png",
      alt: "advertiser",
    },
  ];
  const customerIcon = [
    {
      icon: "/cocacola.png",
      alt: "cocacola",
    },
    {
      icon: "/tiger.png",
      alt: "tiger",
    },
    {
      icon: "/heineiken.png",
      alt: "heineiken",
    },
    {
      icon: "/nutriboost.png",
      alt: "nutriboost",
    },
    {
      icon: "/masanconsumer.png",
      alt: "masanconsumer",
    },
    {
      icon: "acecook.png",
      alt: "acecook",
    },
    {
      icon: "nestle.png",
      alt: "nestle",
    },
    {
      icon: "biasaigon.png",
      alt: "biasaigon",
    },
    {
      icon: "samsung.png",
      alt: "samsung",
    },
    {
      icon: "oppo.png",
      alt: "oppo",
    },
    {
      icon: "vivo.png",
      alt: "vivo",
    },
    {
      icon: "huawei.png",
      alt: "huawei",
    },
    {
      icon: "ford.png",
      alt: "ford",
    },
    {
      icon: "piaggio.png",
      alt: "piaggio",
    },
    {
      icon: "omo.png",
      alt: "omo",
    },
    {
      icon: "sensodyne.png",
      alt: "sensodyne",
    },
    {
      icon: "shopee.png",
      alt: "shopee",
    },
    {
      icon: "tiki.png",
      alt: "tiki",
    },
    {
      icon: "thegioididong.png",
      alt: "thegioididong",
    },
    {
      icon: "dienmayxanh.png",
      alt: "dienmayxanh",
    },
    {
      icon: "citi.png",
      alt: "citi",
    },
    {
      icon: "kangnam.png",
      alt: "kangnam",
    },
    {
      icon: "jwhospital.png",
      alt: "jwhospital",
    },
    {
      icon: "hoalinh.png",
      alt: "hoalinh",
    },
  ];
  const footerData = [
    {
      icon: "/position.png",
      alt: "position",
      text: "Lô 29B-31-33B Đường Tân Thuận, KCX Tân Thuận,P. Tân Thuận Đông, Q.7, Tp.HCM, Việt Nam",
    },
    {
      icon: "/phone-footer.png",
      alt: "phone",
      text: "+84 984 800 205",
    },
    {
      icon: "company.png",
      alt: "company",
      text: "+84 28 7300 8889",
    },
    {
      icon: "desktop-phone.png",
      alt: "phone",
      text: "+84 28 7300 2222",
      subText: "8293",
    },
    {
      icon: "mail.png",
      alt: "mail",
      text: "Huongtt56@fpt.com.vn",
    },
  ];
  const socialIcon = [
    {
      icon: "/instagram.png",
      alt: "instagram",
    },
    {
      icon: "/facebook.png",
      alt: "facebook",
    },
    {
      icon: "/skype.png",
      alt: "skype",
    },
  ];
  return (
    <Styled>
      <Header />
      <div className="homepage">
        <div
          style={{ height: "717px", width: "100%", backgroundColor: "#C4C4C4" }}
        ></div>
        <section className="info">
          <div className="info-header">
            <div className="center text-oran mb-18">Giải pháp tốt nhất</div>
            <div className="center">Cho quảng cáo</div>
            <p>
              Đến với Ads trên FPT Play bạn sẽ được trải nghiệm các dịch vụ tốt
              nhất, đi đầu trong các dạng quảng cáo, data người dùng phong phú
              và hàng ngàn ưu đãi cho các khách hàng có thiện chí.
            </p>
          </div>
          <div className="info-body">
            <div className="item-container">
              <div className="item">
                <span className="info-number">
                  30<span className="small">Triệu</span>
                </span>
                <span className="info-unit small">Users</span>
                <div className="info-bg"></div>
              </div>
              <div className="item">
                <span className="info-number">
                  30<span className="small">Triệu</span>
                </span>
                <span className="info-unit small">Users</span>
                <div className="info-bg"></div>
              </div>
              <div className="item">
                <span className="info-number">
                  30<span className="small">Triệu</span>
                </span>
                <span className="info-unit small">Users</span>
                <div className="info-bg"></div>
              </div>
              <div className="item">
                <span className="info-number">
                  30<span className="small">Triệu</span>
                </span>
                <span className="info-unit small">Users</span>
                <div className="info-bg"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="intro">
          <div className="item-container">
            <div className="item">
              <div className="text-oran">FPT Play</div>
              <div className="text-header">Có gì?</div>
              <p className="text-content">
                FPT Play là một nền tảng xem phim với chất lượng và hình ảnh
                hoàn hảo. Kèm theo đó là lượng user ổn định, người dùng da dạng
                ở mọi độ tuổi, giới tính. Có thể phù hợp với mọi tiêu chí của
                khách hàng.
              </p>
            </div>
            <div className="item bg-gray">
              <img src="/report.png" alt="report" className="intro-img" />
              <div className="text-header">Đánh giá và theo dõi</div>
              <p className="text-content">
                Bạn có thể dễ dàng đo đếm, tracking số liệu, quan sát được tần
                suất hiển thị của quảng cáo mình đang chạy.
              </p>
            </div>
            <div className="item bg-gray">
              <img src="/play.png" alt="play" className="intro-img" />
              <div className="text-header">Tương tác</div>
              <p className="text-content">
                Người dùng có thể tương tác trực tiếp với quảng cáo như: Xem chi
                tiết, điền form, like share comment,...
              </p>
            </div>
          </div>
        </section>
        <section className="demo">
          <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>
            <Col className="gutter-row" span={8}>
              <div className="demo-header">
                <div className="">Demo quảng cáo</div>
                <div className="">Các dạng quảng cáo nổi bật</div>
                <div className="">Xem thêm</div>
              </div>
            </Col>
            {demoData.map((item, index) => {
              return (
                <Col className="gutter-row" span={8} key={`demo-${index}`}>
                  <img className="demo-img" src={item.icon} alt={item.alt} />
                </Col>
              );
            })}
          </Row>
        </section>
        <section className="customer">
          <div className="customer-header">
            <div className="center text-oran">Khách hàng</div>
            <div className="center">Khách hàng thân thiết</div>
            <p className="center">
              Hàng ngàn khách hàng đã tin tưởng và đồng hành cùng FPT Play trong
              thời gian qua.
            </p>
          </div>
          <div className="customer-body">
            <div className="customer-icon-container">
              <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>
                {customerIcon.map((item, index) => {
                  return (
                    <Col span={6}>
                      <div className="item">
                        <Image
                          className="customer-img"
                          src={item.icon}
                          alt={item.alt}
                          preview={false}
                        />
                      </div>
                    </Col>
                  );
                })}
              </Row>
              <div className="clear"></div>
            </div>
            <div className="contact-button">Liên hệ ngay</div>
          </div>
        </section>
        <section className="footer">
          <div className="footer-contact">
            <Row style={{ height: "100%" }}>
              <Col span={12} className="relative">
                <div className="footer-left">
                  <p>
                    Đến với Ads trên FPT Play bạn sẽ được trải nghiệm các dịch
                    vụ tốt nhất, đi đầu trong các dạng quảng cáo, data người
                    dùng phong phú và hàng ngàn ưu đãi cho các khách hàng có
                    thiện chí.
                  </p>
                  <Row>
                    <Col span={4}>
                      <Image width={60} height={60} src="/play-circle.png" />
                    </Col>
                    <Col flex="auto" className="about-col">
                      <div>ABOUT</div>
                      <div></div>
                      <div>Promotion video</div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col span={12} className="relative">
                <div className="footer-right">
                  <div className="contact-container">
                    <div>contact us</div>
                    {footerData.map((item, index) => {
                      return (
                        <div>
                          <Image
                            width={18}
                            height={18}
                            src={item.icon}
                            alt={item.alt}
                          />
                          <p className="footer-text">
                            {item.text}
                            {/* {item.subText && <span>Ext</span>
                            item.subText
                            
                            } */}
                          </p>
                        </div>
                      );
                    })}
                    {/* <div className="footer-location">
                        
                          <Image width={18} height={18} src="/position.png"/>
                    <p className="footer-text"></p>*/}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="footer-social">
            <div className="footer-social-container">
              <span>follow us:</span>
              <div className="footer-icon-container">
                {socialIcon.map((item, index) => {
                  return (
                    <Image
                      width={40}
                      height={40}
                      src={item.icon}
                      alt={item.alt}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Styled>
  );
};

export default Home;
