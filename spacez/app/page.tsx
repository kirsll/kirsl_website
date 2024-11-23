"use client";
import "./main.css";
import "./script.js";
import { useEffect} from "react";
import { BasedPlanet } from "./planets.jsx"


interface PlanetConsProps {
    valuer: string;
    propertier: string;
    percenter: string | number;
  }
  
  
  // Реализуем компонент
  const PlanetCons: React.FC<PlanetConsProps> = ({valuer, propertier, percenter}) => {
    return(
        <div className="consist">
            <div className="visible-block">
                <div className="text-block">
                    <div className="valuer"><strong>{valuer}</strong></div>
                    <div className="propertier"><strong>{propertier}</strong></div>                                       
                    <div className="percenter">{percenter}</div>
                </div>
            </div>
        </div>
    );
}

export default function Home() {
    const SketchfabEmbed = () => {
        return (
        <div className="sketchfab-embed-wrapper">
            <iframe
              title="МЕЖДУНАРОДНАЯ КОСМИЧЕСКАЯ СТАНЦИЯ (МКС)"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; fullscreen; xr-spatial-tracking"
              src="https://sketchfab.com/models/1617d44d5d7c4430aecfa48b2e85e529/embed?autostart=1&preload=1&transparent=1&ui_watermark_link=0&ui_watermark=0"
            >
            </iframe>
          </div>
        );
      };

    useEffect(() => {
        main();
}, [])

  return (
    <>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <div id="container">
        
        <div className="main">
            <header className="header" >
                <div className="title">КОСМОС</div>
                <p className="subtitle">- всё находящееся за пределами Земли и её атмосферы.</p>
                <img src="/main/moon-earth.png" alt="Вид Земли с Луны" className="hero-img"/>
            </header>
            <div className="whatIsIt">Значимость сайта заключается в том, чтоб вдохновить аудиторию через рассказы о профессиях, связанных с космосом и сформировать общественное понимание, почему космос важен для нашего будущего</div>
            <main className="content">
                <h2 className="section-title">Солнечная система</h2>
                <nav className="planet-menu">
                    <div className="ul">
                        <a href="#Mercury">Меркурий</a>
                        <a href="#Venus">Венера</a>
                        <a href="#Earth">Земля</a>
                        <a href="#Mars">Марс</a>
                        <a href="#Jupiter">Юпитер</a>
                        <a href="#Saturn">Сатурн</a>
                        <a href="#Uranus">Уран</a>
                        <a href="#Neptune">Нептун</a>
                    </div>
                </nav>
                <section className="planet-info" id="Mercury">
                    <div className="information">
                        <h3 className="Name">Меркурий</h3>
                        <p className="info">Первая по удалённости от Солнца планета Солнечной системы. Самая маленькая и наименее массивная среди планет, имеет высокую плотность и тонкую атмосферу, почти полностью лишённую газа.</p>
                        <div className="planet-stats">
                            <div className="block">
                                <div className="visible-block">
                                    <div className="text-block">
                                        <p className="value">4 780 км</p>
                                        <p className="property">Высота</p>
                                    </div>
                                </div>
                            </div>
                            <div className="block">
                                <div className="visible-block">
                                    <div className="text-block">
                                        <p className="value">3,3⋅10<sup>23</sup> кг</p>
                                        <p className="property"><strong>Масса</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4>Состав атмосферы</h4>
                        <div className="atmosphere">
                            <PlanetCons valuer="O₂" propertier="Кислород" percenter="78,08%"></PlanetCons>
                            <PlanetCons valuer="Na" propertier="Натрий" percenter="20,9476%"></PlanetCons>
                            <PlanetCons valuer="H" propertier="Водород" percenter="0.934%"></PlanetCons>
                            <PlanetCons valuer="He" propertier="Гелий" percenter="0,038%"></PlanetCons>
                        </div>
                    </div>
                    <div className="imager">
                        {BasedPlanet("/3dmodels/Mercury.gltf", [0.22, 0.25, 0.22])}
                    </div>

                </section>
                <section className="planet-info" id="Venus">
                    <div className="information">
                        <h3 className="Name">Венера</h3>
                        <p className="info">Вторая по удалённости от Солнца планета. Схожа с Землёй по размерам и массе, но отличается крайне плотной атмосферой из углекислого газа, что создаёт парниковый эффект, делая её самой горячей планетой в Солнечной системе.</p>
                        <div className="planet-stats">
                            <div className="block">
                                <div className="visible-block">
                                    <div className="text-block">
                                        <p className="value">12 104 км</p>
                                        <p className="property">Высота</p>
                                    </div>
                                </div>
                            </div>
                            <div className="block">
                                <div className="visible-block">
                                    <div className="text-block">
                                        <p className="value">4,87×10<sup>24</sup> кг</p>
                                        <p className="property"><strong>Масса</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4>Состав атмосферы</h4>
                        <div className="atmosphere">
                            <PlanetCons valuer="CO₂" propertier="Уг. газ" percenter="96,5%"></PlanetCons>
                            <PlanetCons valuer="N₂" propertier="Азот" percenter="3,5%"></PlanetCons>
                            <PlanetCons valuer="SO₂" propertier="Диок. сер" percenter="0,018%"></PlanetCons>
                            <PlanetCons valuer="Ar" propertier="Аргон" percenter="0,007%"></PlanetCons>
                        </div>
                    </div>
        
                    <div className="imager">
                        {BasedPlanet("/3dmodels/Venus.gltf", [0.22, 0.25, 0.22])}
                    </div>
                </section>
                <section className="planet-info" id="Earth">
                    <div className="information">
                        <h3 className="Name">Земля</h3>
                        <p className="info">Третья по удалённости от Солнца планета Солнечной системы. Самая плотная, единственная известная обитаемая планета.</p>
                        <div className="planet-stats">
                            <div className="block">
                                <div className="visible-block">
                                    <div className="text-block">
                                        <p className="value">12 742 км</p>
                                        <p className="property">Высота</p>
                                    </div>
                                </div>
                            </div>
                            <div className="block">
                                <div className="visible-block">
                                    <div className="text-block">
                                        <p className="value">5.98×10<sup>24</sup> кг</p>
                                        <p className="property"><strong>Масса</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4>Состав атмосферы</h4>
                        <div className="atmosphere">
                            <PlanetCons valuer="N₂" propertier="Азот" percenter="78%"></PlanetCons>
                            <PlanetCons valuer="O₂" propertier="Кислород" percenter="21%"></PlanetCons>
                            <PlanetCons valuer="Ar" propertier="Аргон" percenter="0,9%"></PlanetCons>
                            <PlanetCons valuer="CO₂" propertier="Уг. газ" percenter="0,04%"></PlanetCons>
                        </div>
                    </div>
        
                    <div id="imager" className="imager">
                        {/* <img src="/main/earth.png" alt="earth" className="planet-photo"></img> */}
                        {BasedPlanet("/3dmodels/ia/untitled.gltf", [1, 1.2, 1])}
                    </div>
                </section>
                <section className="planet-info" id="Mars">
                    <div className="information">
                        <h3 className="Name">Марс</h3>
                        <p className="info">Четвёртая по удалённости от Солнца планета. Известен как «Красная планета» благодаря своему цвету, вызванному оксидом железа на поверхности.Имеет разреженную атмосферу и полярные шапки из льда и замёрзшего углекислого газа.</p>
                        <div className="planet-stats">
                            <div className="block">
                                <div className="visible-block">
                                    <div className="text-block">
                                        <p className="value">6 779 км</p>
                                        <p className="property">Высота</p>
                                    </div>
                                </div>
                            </div>
                            <div className="block">
                                <div className="visible-block">
                                    <div className="text-block">
                                        <p className="value">6,42⋅10<sup>23</sup> кг</p>
                                        <p className="property"><strong>Масса</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4>Состав атмосферы</h4>
                        <div className="atmosphere">
                            <PlanetCons valuer="CO₂" propertier="Уг. газ" percenter="95,32%"></PlanetCons>
                            <PlanetCons valuer="N" propertier="Азот" percenter="2,7%"></PlanetCons>
                            <PlanetCons valuer="Ar" propertier="Аргон" percenter="1,6%"></PlanetCons>
                            <PlanetCons valuer="O₂" propertier="Кислород" percenter="0.145%"></PlanetCons>
                        </div>
                    </div>
        
                    <div className="imager">                        {BasedPlanet("/3dmodels/Mars.gltf", [0.22, 0.25, 0.22])}

                    </div>
                </section>
                <section className="planet-info" id="Jupiter">
                    <div className="information">
                        <h3 className="Name">Юпитер</h3>
                        <p className="info">Пятая по удалённости от Солнца и крупнейшая планета Солнечной системы. Является газовым гигантом, имеет самую большую массу среди планет и знаменит своим «Большим красным пятном» — гигантским антициклоном.</p>
                        <div className="planet-stats">
                            <div className="block">
                                <div className="visible-block">
                                    <div className="text-block">
                                        <p className="value">139 820 км</p>
                                        <p className="property">Высота</p>
                                    </div>
                                </div>
                            </div>
                            <div className="block">
                                <div className="visible-block">
                                    <div className="text-block">
                                        <p className="value">1,899⋅10<sup>27</sup> кг</p>
                                        <p className="property"><strong>Масса</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4>Состав атмосферы</h4>
                        <div className="atmosphere">
                            <PlanetCons valuer="H₂" propertier="Водород" percenter="89,8%"></PlanetCons>
                            <PlanetCons valuer="He" propertier="Гелий" percenter="10,2%"></PlanetCons>
                            <PlanetCons valuer="CH₄" propertier="Метан" percenter="1,6%"></PlanetCons>
                            <PlanetCons valuer="NH₄" propertier="Аммоний" percenter="0,145%"></PlanetCons>
                        </div>
                    </div>
        
                    <div className="imager">                        {BasedPlanet("/3dmodels/Jupiter.gltf", [0.22, 0.25, 0.22])}
                    </div>
                </section>
                <section className="planet-info" id="Saturn">
                    <div className="information">
                        <h3 className="Name">Сатурн</h3>
                        <p className="info">Шестая по удалённости от Солнца планета. Вторая по величине и массе после Юпитера, является газовым гигантом и известен своими ярко выраженными кольцами, состоящими из льда и пыли.</p>
                        <div className="planet-stats">
                            <div className="block">
                                <div className="visible-block">
                                    <div className="text-block">
                                        <p className="value">116 460 км</p>
                                        <p className="property">Высота</p>
                                    </div>
                                </div>
                            </div>
                            <div className="block">
                                <div className="visible-block">
                                    <div className="text-block">
                                        <p className="value">5,685⋅10<sup>26</sup> кг</p>
                                        <p className="property"><strong>Масса</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4>Состав атмосферы</h4>
                        <div className="atmosphere">
                            <PlanetCons valuer="H₂" propertier="Водород" percenter="96%"></PlanetCons>
                            <PlanetCons valuer="He" propertier="Гелий" percenter="3%"></PlanetCons>
                            <PlanetCons valuer="CH₄" propertier="Метан" percenter="0,4%"></PlanetCons>
                            <PlanetCons valuer="NH₃" propertier="Аммиак" percenter="0,1%"></PlanetCons>
                        </div>
                    </div>
        
                    <div className="imager">
                        {BasedPlanet("/3dmodels/Saturn.gltf", [0.22, 0.25, 0.22])}
                    </div>
                </section>
                <section className="planet-info" id="Uranus">
                    <div className="information">
                        <h3 className="Name">Уран</h3>
                        <p className="info">Седьмая по удалённости от Солнца планета. Третий по диаметру и четвёртый по массе, является ледяным гигантом с уникальной осью вращения, которая почти лежит в плоскости его орбиты, создавая необычные сезоны.</p>
                        <div className="planet-stats">
                            <div className="block">
                                <div className="visible-block">
                                    <div className="text-block">
                                        <p className="value">50 724 км</p>
                                        <p className="property">Высота</p>
                                    </div>
                                </div>
                            </div>
                            <div className="block">
                                <div className="visible-block">
                                    <div className="text-block">
                                        <p className="value">8,681⋅10<sup>25</sup> кг</p>
                                        <p className="property"><strong>Масса</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4>Состав атмосферы</h4>
                        <div className="atmosphere">
                            <PlanetCons valuer="H" propertier="Водород" percenter="83%"></PlanetCons>
                            <PlanetCons valuer="He" propertier="Гелий" percenter="15%"></PlanetCons>
                            <PlanetCons valuer="CH₄" propertier="Метан" percenter="2,3%"></PlanetCons>
                        </div>
                    </div>
        
                    <div className="imager">                        {BasedPlanet("/3dmodels/Uranus.gltf", [0.22, 0.25, 0.22])}
                    </div>
                </section>
                <section className="planet-info" id="Neptune">
                    <div className="information">
                        <h3 className="Name">Нептун</h3>
                        <p className="info">Самая удалённая от Солнца планета Солнечной системы. Четвёртая по диаметру и третья по массе, также относится к ледяным гигантам и отличается сильнейшими ветрами в атмосфере, достигающими скорости свыше 2000 км/ч.</p>
                        <div className="planet-stats">
                            <div className="block">
                                <div className="visible-block">
                                    <div className="text-block">
                                        <p className="value">48 682 км</p>
                                        <p className="property">Высота</p>
                                    </div>
                                </div>
                            </div>
                            <div className="block">
                                <div className="visible-block">
                                    <div className="text-block">
                                        <p className="value">10,2⋅10<sup>25</sup> кг</p>
                                        <p className="property"><strong>Масса</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4>Состав атмосферы</h4>
                        <div className="atmosphere">
                            <PlanetCons valuer="H" propertier="Водород" percenter="80%"></PlanetCons>
                            <PlanetCons valuer="He" propertier="Гелий" percenter="19%"></PlanetCons>
                            <PlanetCons valuer="CH₄" propertier="Метан" percenter="1,5%"></PlanetCons>
                            <PlanetCons valuer="HD" propertier="Д. вод" percenter="0,019%"></PlanetCons>
                        </div>
                    </div>
        
                    <div className="imager">
                        {BasedPlanet("/3dmodels/Neptune.gltf", [0.22, 0.25, 0.22])}                    
                    </div>
                </section>
            </main>
            <section className="mks">
                <div className="mks_title">Международная космическая станция</div>
                <div className="mks-model">
                    <SketchfabEmbed/>
                </div>
                <div className="history_title">История создания</div>
                <div className="history-text">
                    <div className="left-text">
                        <p className="hist">История создания МКС началась в 1984 году, когда президент США Рональд Рейган объявил о начале работ по созданию американской орбитальной станции.</p>
                        <p className="hist">В 1988 году проектируемая станция  была названа «Freedom» («Свобода»). Это был совместный проект США, ЕКА,  Канады и Японии. Планировалась крупногабаритная управляемая станция,  модули которой будут доставляться по очереди на орбиту кораблями  «Шаттл».</p>
                        <p className="hist">В начале 1990-х годов выяснилось,  что стоимость разработки проекта слишком велика и только международная  кооперация позволит создать такую станцию. </p>
                    </div>
                    <div className="right-text">
                        <p className="hist">17 июня 1992 года Россия и США  заключили соглашение о сотрудничестве в исследовании космоса. В  соответствии с ним Российское космическое агентство и НАСА разработали  совместную программу «Мир — Шаттл».
                        В ходе реализации программы «Мир — Шаттл» родилась идея объединения национальных программ создания орбитальных станций.</p>
                        <p className="hist">В марте 1993 года генеральный  директор РКА Юрий Коптев и генеральный конструктор НПО «Энергия» Юрий  Семёнов предложили руководителю НАСА Дэниелу Голдину создать  Международную космическую станцию.</p>
                        <p className="hist">2 сентября 1993 года вице-президент США Альберт Гор и председатель Совета Министров РФ Виктор Черномырдин  объявили о новом проекте «подлинно международной космической станции». С этого момента официальным названием станции стало «Международная  космическая станция», хотя параллельно использовалось и неофициальное —  космическая станция «Альфа».</p>
                    </div>
                    <img src="/main/mks-photo.png" alt="mks-photo" className="mks-photo"/>
                </div>
            </section>
            <section className="black-holes">
                <div className="hole_title">Чёрные дыры</div>
                <img className="hole_photo" src="/main/Black_hole.png" alt="black_hole"/>
                <p className="holes-info">Разбросаны по всей вселенной</p>
                <p className="holes-info2">объекты с такой мощной гравитацией, что ничто не может избежать их хватки. Они могут разрывать целые звезды и планеты. Влияние черной дыры продолжает усиливаться по мере приближения объекта к горизонту событий черной дыры: это точка невозврата или граница, окружающая черную дыру, за пределы которой ничто, даже свет, не может вырваться. Для любого объекта, падающего в черную дыру, та часть, которая ближе к черной дыре, будет испытывать более сильное гравитационное притяжение, чем та часть, которая дальше от черной дыры. Эта разница увеличивается по мере приближения объекта к горизонту событий.</p>
            </section>
            <section className="intresting">
                <div className="int_title">Интересные факты</div>
                <div className="first_row">
                    <div className="finf">
                        <div className="finf_title">Гравитация, из которой не выбраться</div>
                        <div className="finf_text">Чёрные дыры настолько массивны, что их гравитационное поле не позволяет ничего покинуть их пределы, даже свет. Граница, после которой нет возврата, называется горизонтом событий.</div>
                    </div>
                    <img className="fimg" src="/main/vihr.png" alt="black_hole"/>
                </div>
                <div className="second_row">
                    <img className="s_fimg" src="/main/scary.png" alt="black_hole"/>
                    <div className="s_finf">
                        <div className="s_finf_title">Их невозможно увидеть напрямую</div>
                        <div className="s_finf_text">Поскольку свет не может покинуть чёрную дыру, они невидимы. Учёные обнаруживают их по косвенным признакам, например, по поведению близлежащих объектов или излучению газа, падающего на чёрную дыру.</div>
                    </div>
                </div>
                <div className="first_row">
                    <div className="finf">
                        <div className="finf_title">Сильнейшее искривление времени и пространства</div>
                        <div className="finf_text">Вблизи чёрной дыры время замедляется для внешнего наблюдателя. Этот эффект, предсказанный теорией относительности Эйнштейна, называется гравитационным замедлением времени.</div>
                    </div>
                    <img className="fimg" src="/main/reverse.png" alt="black_hole"/>
                </div>
                <div className="second_row">
                    <img className="s_fimg" src="/main/insomnia.png" alt="black_hole"/>
                    <div className="s_finf">
                        <div className="s_finf_title">Чёрные дыры испаряются</div>
                        <div className="s_finf_text">Благодаря процессу, названному излучением Хокинга, чёрные дыры теряют свою массу со временем. Это излучение связано с квантовыми эффектами и может привести к исчезновению чёрной дыры через огромное количество времени.</div>
                    </div>
                </div>
                <div className="last_row">
                    <div className="l_finf">
                        <div className="l_finf_title"> Они могут быть разного размера</div>
                        <div className="l_finf_text">Чёрные дыры бывают звёздной массы (образуются при коллапсе массивных звёзд), сверхмассивными (находятся в центрах галактик) и даже гипотетическими микроскопическими.</div>
                    </div>
                    <img className="l_fimg" src="/main/terraria.png" alt="black_hole"/>
                </div>
            </section>
            <section className="prof">
                <div className="prof_title">Профессии будущего</div>
                <div className="engineer">
                    <div className="eng_title">Инженеры по колонизации планет</div>
                    <div className="eng_text">
                        <div className="eng_blocks_l">
                            <div className="left_def"></div>
                            <div className="texter_block1">
                                <div className="left_texter">разрабатывают технологии для создания обитаемых поселений на других планетах, включая строительство куполов, систем жизнеобеспечения, генерации энергии и управления ресурсами.</div>
                            </div>
                        </div>
                        <div className="eng_blocks_r">
                            <div className="right_def"></div>
                            <div className="texter_block2">
                                <div className="right_texter">для работы инженером по колонизации планет нужно иметь навыки в инженерии, материаловедении, климатологии, биологии замкнутых экосистем.</div>
                            </div>
                        </div>
                    </div>
                    <img className="cosm" src="/main/cosm1.png" alt="cosmonaut"/>
                    <img className="moonimg" src="/main/moon.png" alt="moon"/>
                </div>
                <div className="engineer">
                    <div className="eng_title">Агрономы и биологи для внеземных условий</div>
                    <div className="eng_text">
                        <div className="eng_blocks_l">
                            <div className="left_def"></div>
                            <div className="texter_block1">
                                <div className="left_texter">разрабатывают методы выращивания растений в условиях низкой гравитации или отсутствия атмосферы, создают замкнутые экосистемы для обеспечения жизнедеятельности.</div>
                            </div>
                        </div>
                        <div className="eng_blocks_r">
                            <div className="right_def"></div>
                            <div className="texter_block2">
                                <div className="right_texter">для работы агрономом и биологом для внеземных условий нужно иметь навыки в генетике, биоинженерии, химии, гидропонике.</div>
                            </div>
                        </div>
                    </div>
                    <img className="cosm" src="/main/cosm2.png" alt="cosmonaut"/>
                    <img className="moonimg" src="/main/moon.png" alt="moon"/>
                </div>
                <div className="engineer">
                    <div className="eng_title">Пилоты и операторы космических аппаратов</div>
                    <div className="eng_text">
                        <div className="eng_blocks_l">
                            <div className="left_def"></div>
                            <div className="texter_block1">
                                <div className="left_texter">управляют космическими кораблями, транспортировкой грузов и посадкой на другие небесные тела.</div>
                            </div>
                        </div>
                        <div className="eng_blocks_r">
                            <div className="right_def"></div>
                            <div className="texter_block2">
                                <div className="right_texter">для работы  пилотом и оператором космических аппаратов нужно иметь навыки в программировании, управлении системами жизнеобеспечения,  пилотировании.</div>
                            </div>
                        </div>
                    </div>
                    <img className="cosm" src="/main/cosm3.png" alt="cosmonaut"/>
                    <img className="moonimg" src="/main/moon.png" alt="moon"/>
                </div>
                <div className="engineer">
                    <div className="eng_title">Горнодобытчики и геологи в космосе</div>
                    <div className="eng_text">
                        <div className="eng_blocks_l">
                            <div className="left_def"></div>
                            <div className="texter_block1">
                                <div className="left_texter">ищут и добывают полезные ископаемые на астероидах, Луне и других планетах.</div>
                            </div>
                        </div>
                        <div className="eng_blocks_r">
                            <div className="right_def"></div>
                            <div className="texter_block2">
                                <div className="right_texter">для работы горнодобытчиком и геологом в космосе нужно иметь навыки в робототехнике, материаловедении, геологии, химическом анализе.</div>
                            </div>
                        </div>
                    </div>
                    <img className="cosm" src="/main/cosm4.png" alt="cosmonaut"/>
                    <img className="moonimg" src="/main/moon.png" alt="moon"/>
                </div>
                <div className="engineer">
                    <div className="eng_title">Врачи-космобиологи и специалисты по здоровью в космосе</div>
                    <div className="eng_text">
                        <div className="eng_blocks_l">
                            <div className="left_def"></div>
                            <div className="texter_block1">
                                <div className="left_texter">изучают влияние космических условий на организм человека, разрабатывают методы профилактики и лечения заболеваний в условиях невесомости.</div>
                            </div>
                        </div>
                        <div className="eng_blocks_r">
                            <div className="right_def"></div>
                            <div className="texter_block2">
                                <div className="right_texter">для работы врачом-космобиологом и специалистом по здоровью в космосе нужно иметь навыки в медицине, биологии, фармакологии, физиологии.</div>
                            </div>
                        </div>
                    </div>
                    <img className="cosm" src="/main/cosm5.png" alt="cosmonaut"/>
                    <img className="moonimg" src="/main/moon.png" alt="moon"/>
                </div>
                <div className="engineer">
                    <div className="eng_title">Программисты и специалисты по ИИ для космоса</div>
                    <div className="eng_text">
                        <div className="eng_blocks_l">
                            <div className="left_def"></div>
                            <div className="texter_block1">
                                <div className="left_texter">разрабатывают программное обеспечение для автономных аппаратов, анализируют данные, управляют роботизированными системами.</div>
                            </div>
                        </div>
                        <div className="eng_blocks_r">
                            <div className="right_def"></div>
                            <div className="texter_block2">
                                <div className="right_texter">для работы программистом и специалистом по ИИ для космоса нужно иметь навыки в машинном обучении, обработке больших данных, алгоритмах навигации.</div>
                            </div>
                        </div>
                    </div>
                    <img className="cosm" src="/main/cosm6.png" alt="cosmonaut"/>
                    <img className="moonimg" src="/main/moon.png" alt="moon"/>
                </div>
                <div className="engineer">
                    <div className="eng_title">Специалисты по терраформированию</div>
                    <div className="eng_text">
                        <div className="eng_blocks_l">
                            <div className="left_def"></div>
                            <div className="texter_block1">
                                <div className="left_texter">разрабатывают технологии для изменения условий на других планетах, чтобы сделать их пригодными для жизни.</div>
                            </div>
                        </div>
                        <div className="eng_blocks_r">
                            <div className="right_def"></div>
                            <div className="texter_block2">
                                <div className="right_texter">для работы специалистом по терраформированию нужно иметь навыки в климатологии, биохимии, инженерии, экологии.</div>
                            </div>
                        </div>
                    </div>
                    <img className="cosm" src="/main/cosm7.png" alt="cosmonaut"/>
                    <img className="moonimg" src="/main/moon.png" alt="moon"/>
                </div>
                <div className="engineer">
                    <div className="eng_title">ㅤ     Экоинженеры космоса     ㅤ</div>
                    <div className="eng_text">
                        <div className="eng_blocks_l">
                            <div className="left_def"></div>
                            <div className="texter_block1">
                                <div className="left_texter">создают системы переработки отходов и поддержания экологического баланса в космических поселениях.</div>
                            </div>
                        </div>
                        <div className="eng_blocks_r">
                            <div className="right_def"></div>
                            <div className="texter_block2">
                                <div className="right_texter">для работы экоинженером космоса нужно иметь навыки в экологии, инженерии, химии.</div>
                            </div>
                        </div>
                    </div>
                    <img className="cosm" src="/main/cosm8.png" alt="cosmonaut"/>
                    <img className="moonimg" src="/main/moon.png" alt="moon"/>
                </div>
            </section>
            <div className="thank"><i className='bx bxs-planet' ></i>     Спасибо за внимание!     <i className='bx bxs-rocket'></i></div>
            <section className="footer">
                <div className="pre-footer"></div>
                <img src="/main/footer.gif" alt="footer"/>
                <div className="sources">
                    <p className="linker"></p>
                    <p className="linker"></p>
                    <p className="linker"></p>
                    <p className="linker"></p>
                    <p className="linker"></p>
                </div>
            </section>
        </div>
    </div>
    </>
    );
}

async function main() {
  const container = document.getElementById('container');
  if (!container) return
  const numStars = 100;
  for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      await new Promise(resolve => setTimeout(resolve, Math.random() * 300));
      star.classList.add('star');

      const size = Math.random() * 4;
      star.style.width = `${size}px`;
      star.style.height = `${size*2}px`;
      
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;

      const speed = Math.random() * 5 + 2;
      star.style.animationDuration = `${speed}s`;

      container.appendChild(star);

      function animateStar() {
          let position = parseFloat(star.style.top);
          position += speed;
          if (!container) return
          if (position > container.offsetHeight) {
              position = -10;
          }
          star.style.top = `${position}px`;
          requestAnimationFrame(animateStar);
      }

      animateStar();
  }
}
