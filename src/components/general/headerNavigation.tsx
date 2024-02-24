import { INavigationData } from "@/types/navigationTypes/navigationDataType"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from "next/link"
export default function HeaderNavigation() {



    return (
       <div className="h-[100px] bg-tera-green flex items-center flex-1 justify-center ">
       <div className="grid grid-cols-7 gap-[1px] ">
            {navigationDataArray.map((item, index) => (
                <HoverCard key={`${item.navigationName}-${index}`} openDelay={100} closeDelay={0}>
                    <div className="group w-full">
                        <HoverCardTrigger asChild>
                            <Link href={"/study"}  className="bg-tera-green w-full  group-hover:bg-green-500 px-4 py-2 text-white">{item.navigationName} </Link></HoverCardTrigger>
                        {item.navigationItems && <HoverCardContent avoidCollisions={false} className=" bg-green-500 group-hover:bg-green-500 flex flex-col p-0     " >

                            {item.navigationItems.map((item, index) => (
                                <div key={`${item}-${index}`} className="text-white font-[600] hover:rounded-md text-[13px] hover:bg-green-700 py-[6px] px-2  ">{item}</div>
                            ))}

                        </HoverCardContent>}
                    </div>
                </HoverCard>
            ))}
        </div>
        </div>
    )
}


const navigationDataArray: INavigationData[] = [
    {
        navigationName: "Головна",
        navigationItems: null,
    },
    {
        navigationName: "Рішення",
        navigationItems: [
            "Дистрибуція",
            "Торгівля", "Управління складом",
            "Управління транспортом",
            "Управління дистрибуційним холдингом",
            "Управління готелем"
        ],
    },
    {
        navigationName: "Продукти",
        navigationItems: ["ОПТІМУМ Географічна Інформаційна Система (ГІС)",
            "ОПТІМУМ Мобільний Моніторинг і Сервіс (ММС)",
            "ОПТІМУМ Система Управління Мобільною Торгівлею (АСУМТ)",
            "ОПТІМУМ Система Управління Територіально Розподіленими Проектами",
            "ОПТІМУМ OLAP",
            "BitImpulse BAT",
            "XLOG WMS",
            "1C Підприємство 8",
            "Мобільна торгівля"],
    },
    {
        navigationName: "Послуги",
        navigationItems: ["Складання кошторисів в АВК-5",
            "Бухгалтерське обслуговування"],
    },
    {
        navigationName: "Навчання",
        navigationItems: [
             "Комп'ютерні курси"
            , "Початковий"
            , "Універсальний"
            , "Microsoft Office"
            , "Кошторисна справа з використанням АВК-5"
            , "Світ Інтернету"
            , "Проектування в AutoCAD"
            , "Проектування в ArchiCAD"
            , "Програмний комплекс ЛІРА-САПР"
            , "Комп'ютерна графіка"
            , "inDesign"
            , "3D Studio Max"
            , "Фотошкола"
            , "Основи операторської майстерності та монтажу"
            , "Курси 1С: Підприємство 8"
            , "Основи бухобліку та 1С:Підприємство 8"
            , "Основи алгоритмізації та програмування"
            , "Web-програмування"
            , "Програмування на 1С"
            , "Мови програмування С,С++"
            , "Курси програмування PHP, SQL"
            , "Програмування засобів для мобільних пристроїв"
            , "Web-дизайн. UI/UX Design"
            , "Мова програмування Python"
            , "Програмування Java"
            , "Програмування JavaScript, FrontEnd"
            , "Онлайн запис"
        ],
    },
    {
        navigationName: "Новини",
        navigationItems: [
            "Новини компанії",
            "Новини Навчального центру",
            "Новини партнерів",
            "Публікації в ЗМІ",
            "Всі новини",
            "Наш досвід впроваджень",

        ],
    },
    {
        navigationName: "Компанія",
        navigationItems: [
           " Про компанію",
"Вакансії",
"Контакти",
"Контакти Навчального центру",
"Сертифікати"
        ],
    },

]