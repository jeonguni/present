import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Program = () => {
  return (
    <div className="layout">
      <Header />
      <section>
        <article className="sub-top">
          <h2 className="sub-top-tit">PROGRAM</h2>
          <p className="sub-top-dec">아이들과 함께 편안하고 즐거운 추억을 만들어보세요.</p>
        </article>
        <article className="sub-content">
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>Daycare</Tab>
              <Tab>Hotel</Tab>
              <Tab>Walking</Tab>
              <Tab>Traning</Tab>
              <Tab>Photography</Tab>
              <Tab>Spa&Beauty</Tab>
            </TabList>
            <TabPanel>
              <h3 className="program-tit">Daycare</h3>
              <p className="program-dec">
                전문인력으로 구성된 해피퍼피에서의 일과는 사회화 놀이, 지능개발, 산책, 피트니스로 진행됩니다. 정기적
                행사로 야외 소풍 수업, 수영 수업 등을 진행합니다.
              </p>
            </TabPanel>
            <TabPanel>
              <h3 className="program-tit">Hotel</h3>
              <p className="program-dec">
                고급스럽고 안정적인 호텔에서 아이들은 꼼꼼케어를 받으며 호텔링을 하게 됩니다. 호텔 이용객은 유치원생들과
                동일하게 즐거운 일과를 보냅니다.
              </p>
            </TabPanel>
            <TabPanel>
              <h3 className="program-tit">Walking</h3>
              <p className="program-dec">
                해피퍼피의 프로페셔널한 선생님들의 인솔하에 숲으로, 강으로 도그워킹을 즐기는 프로그램입니다.
              </p>
            </TabPanel>
            <TabPanel>
              <h3 className="program-tit">Traning</h3>
              <p className="program-dec">
                견주들의 고민 (사회성, 짖음, 분리 불안, 산책 등)을 전문 훈련사와 함께 풀어나가는 교정 프로그램입니다.
              </p>
            </TabPanel>
            <TabPanel>
              <h3 className="program-tit">Photography</h3>
              <p className="program-dec">원하는 컨셉에 맞게 전문 포토그래퍼가 촬영하는 패키지 상품이 진행됩니다.</p>
            </TabPanel>
            <TabPanel>
              <h3 className="program-tit">Spa&Beauty</h3>
              <p className="program-dec">
                27년 경력의 베테랑 미용 실장님의 1:1 Care를 받을 수 있으며, 미용 트라우마가 있는 아이들을 교정합니다.
              </p>
            </TabPanel>
          </Tabs>
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default Program;
