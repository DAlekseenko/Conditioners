import MainPage from './Components/Pages/MainPage/MainPage'
import What from './Components/Pages/What/What'
import Works from './Components/Pages/Works/Works'
import NotFound from './Components/Pages/NotFound/NotFound'
import Price from "./Components/Pages/Price/Price";
import Contacts from "./Components/Pages/Contacts/Contacts"
import Design from "./Components/Pages/WhatSubPages/Design"
import VentilationInstall from "./Components/Pages/WhatSubPages/VentilationInstall"
import VentilationService from "./Components/Pages/WhatSubPages/VentilationService"
import VentilationRepair from "./Components/Pages/WhatSubPages/VentilationRepair"
import ConditionersInstall from "./Components/Pages/WhatSubPages/ConditionersInstall"
import ConditionerService from "./Components/Pages/WhatSubPages/ConditionerService"
import ConditionerClean from "./Components/Pages/WhatSubPages/ConditionerClean"
import ConditionerRefueling from "./Components/Pages/WhatSubPages/ConditionerRefueling"
import RefrigerationService from "./Components/Pages/WhatSubPages/RefrigerationService"
import ChillerService from "./Components/Pages/WhatSubPages/ChillerService"
import ChillerInstall from "./Components/Pages/WhatSubPages/ChillerInstall"
import SplitInstall from "./Components/Pages/WhatSubPages/SplitInstall"
import VRV from "./Components/Pages/WhatSubPages/VRV"

const routes = [
    {
        path: '/',
        exact: true,
        component: MainPage,
        title: 'Сервисное Обслуживание Вентиляции и Кондиционирования Воздуха',
        description: 'Проводим полный спектр работ и ремонт кондиционирования и вентиляционных систем &#9996 Компания Проект Холод - это гарантия качества по доступной цене &#10054',
        h1: 'Сервисное Обслуживание Вентиляции'
    },
    {
        path: '/what',
        exact: true,
        component: What,
        title: 'О Компании Проект Холод | Сервис Вентиляционных Систем',
        description: 'О компании Проект Холод &#10052 Сервисное обслуживание вентиляционных систем и холодильного оборудования по доступным ценам &#9990 +7(909)953-43-67',
        h1: 'О Компании'
    },
    {
        path: '/what/design',
        exact: true,
        component: Design,
        title: 'Проектирование Вентиляции в Москве и Области',
        description: 'Проводим проектирование вентиляции для обьектов и зданий &#9997 Компания Проект Холод предоставляет большой спектр услуг в сфере вентиляционных систем &#10054',
        h1: 'Проектирование Вентиляции'
    },
    {
        path: '/what/ventilation-installation',
        exact: true,
        component: VentilationInstall,
        title: 'Монтаж Вентиляции в Москве | Расчет Естественной Вентиляции',
        description: 'Сделаем монтаж вентиляции быстро и качественно &#9996 Компания Проект Холод предоставляет большой спектр услуг в сфере вентиляционных систем &#10054',
        h1: 'Монтаж Вентиляции'
    },
    {
        path: '/what/ventilation-service',
        exact: true,
        component: VentilationService,
        title: 'Обслуживание Вентиляции | Дезинфекция Воздуховодов',
        description: 'Проводим полное сервисное обслуживание вентиляции &#9997 Компания Проект Холод предоставляет большой спектр услуг в сфере вентиляционных систем &#10054',
        h1: 'Обслуживание Систем Вентиляции'
    },
    {
        path: '/what/ventilation-repair',
        exact: true,
        component: VentilationRepair,
        title: 'Ремонт Систем Вентиляции в Москве - Диагностика Неисправностей',
        description: 'Проводим ремонт вентиляции быстро и качественно &#9996 Компания Проект Холод предоставляет большой спектр услуг в сфере вентиляционных систем &#10054',
        h1: 'Ремонт Систем Вентиляции'
    },
    {
        path: '/what/install-conditioners',
        exact: true,
        component: ConditionersInstall,
        title: 'Установка Кондиционеров в Москве и Области',
        description: 'Проводим монтаж кондиционеров для объектов и зданий &#9997 Компания Проект Холод предоставляет большой спектр услуг в сфере вентиляционных систем &#10054',
        h1: 'Установка Кондиционеров'
    },
    {
        path: '/what/diagnostics-conditioners',
        exact: true,
        component: ConditionerService,
        title: 'Ремонт Кондиционеров в Москве - Диагностика Неисправностей',
        description: 'Проводим ремонт кондиционеров быстро и качественно &#9996 Компания Проект Холод предоставляет большой спектр услуг в сфере кондиционирования &#10054',
        h1: 'Ремонт Кондиционеров'
    },
    {
        path: '/what/clean-conditioners',
        exact: true,
        component: ConditionerClean,
        title: 'Чистка Кондиционеров в Москве и Области',
        description: 'Проводим чистку и полную дезинфекцию кондиционеров &#9997 Компания Проект Холод предоставляет большой спектр услуг в сфере кондиционирования &#10054',
        h1: 'Чистка Кондиционеров'
    },
    {
        path: '/what/service-conditioners',
        exact: true,
        component: ConditionerRefueling,
        title: 'Заправка Кондиционера Фреоном по Доступным Ценам',
        description: 'Опытные мастера проведут заправку кондиционеров быстро и качественно &#9996 Компания Проект Холод предоставляет полный цикл обслуживания кондиционеров &#10054',
        h1: 'Заправка Кондиционеров'
    },
    {
        path: '/what/vrv-service',
        exact: true,
        component: VRV,
        title: 'Монтаж VRV Систем | Ремонт VRF Систем Кондиционирования',
        description: 'Проводим монтаж и ремонт VRF и VRF систем кондиционирования &#9997 Компания Проект Холод предоставляет большой спектр услуг в сфере вентиляционных систем &#10054',
        h1: 'Монтаж и Ремонт VRV и VRF Систем'
    },
    {
        path: '/what/refrigeration-service',
        exact: true,
        component: RefrigerationService,
        title: 'Монтаж и Ремонт Холодильного Оборудования в Москве и Области',
        description: 'Ремонт и монтаж промышленных холодильников быстро и качественно &#9996 Компания Проект Холод предоставляет услуги сервиса в сфере холодильного оборудования &#10054',
        h1: 'Ремонт Холодильного Оборудования'
    },
    {
        path: '/what/chillers-service',
        exact: true,
        component: ChillerService,
        title: 'Ремонт Чиллеров и Файнколов в Москве и Области',
        description: 'Проводим ремонт и диагностику чиллеров и файнколов &#9997 Компания Проект Холод предоставляет большой спектр услуг в сфере вентиляционных систем &#10054',
        h1: 'Ремонт Чиллеров и Файнколов'
    },
    {
        path: '/what/chiller-install',
        exact: true,
        component: ChillerInstall,
        title: 'Монтаж Чиллера Цена | Установка Файнколов в Москве и Области',
        description: 'Установка чиллеров и файнколов быстро и качественно &#9997 Компания Проект Холод - это большой спектр услуг в сфере вентиляционных систем &#10054',
        h1: 'Монтаж Чиллеров и Файнколов'
    },
    {
        path: '/what/split-install',
        exact: true,
        component: SplitInstall,
        title: 'Установка Сплит Систем в Москве и Области',
        description: 'Установка и ремонт сплит-систем для обьектов и зданий &#9997 Компания Проект Холод предоставляет большой спектр услуг в сфере вентиляционных систем &#10054',
        h1: 'Установка Сплит Систем'
    },
    {
        path: '/works',
        exact: true,
        component: Works,
        title: 'Каталог Работ Проект Холод | Сервис Вентиляционных Систем',
        description: 'Каталог работ компании Проект Холод &#10052 Сервисное обслуживание вентиляционных систем и холодильного оборудования по доступным ценам &#9990 +7(909)953-43-67',
        h1: 'Каталог Работ'
    },
    {
        path: '/prices',
        exact: true,
        component: Price,
        title: 'Прайс-Лист Услуг Компании Проект Холод',
        description: 'Прайс-лист услуг компании Проект Холод &#10052 Сервисное обслуживание вентиляционных систем и холодильного оборудования по доступным ценам &#9990 +7(909)953-43-67',
        h1: 'Прайс-Лист Услуг'
    },
    {
        path: '/contacts',
        exact: true,
        component: Contacts,
        title: 'Контакты Компании Проект Холод | Сервис Вентиляционных Систем',
        description: 'Контакты компании Проект Холод &#10052 Сервисное обслуживание и ремонт вентиляционных систем и холодильного оборудования по доступным ценам &#9990',
        h1: 'Контакты Компании'
    },
    {
        path: '*',
        component: NotFound,
        title: 'Ошибка 404. Страница не найдена',
    }

];

export default routes;
