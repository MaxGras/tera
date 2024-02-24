import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import Link from "next/link"
export default function Page(){



    return(
        <div className="flex flex-col items-center">
            <h2 className="text-[52px] font-[600] text-tera-green self-start px-[20%] py-5">Навчання</h2>
            <div className="grid grid-cols-3 px-[20%] gap-y-[2%] gap-x-[10%] grid-rows-auto">
                {dataArray.map((item,index)=>(
                    <Card className="" key={`${item} - ${index}`}>
                        <CardHeader><Link href={item?.link ? item?.link :"/study"} className="text-tera-green uppercase font-[600] text-[18px]">{item.nameOfCourse}</Link></CardHeader>
                        <CardFooter>{item.description}</CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}


const dataArray = [
    {
        nameOfCourse:"UI/UX Дизайн",
        description: "Розробка дизайну сайтів і не тільки."
    },
    {
        nameOfCourse:"1С: ПІДПРИЄМСТВО 8. БАЗОВИЙ ТА ПРОФЕСІЙНИЙ КУРСИ",
        description: "1С:Підприємство 8 для менеджерів, бухгалтерів, керівників"
    }, {
        nameOfCourse:"КУРСИ ОСНОВ ПРОГРАМУВАННЯ",
        description: "Курси вивчення основ програмування та алгоритмізації. Якісна базова освіта для майбутнього програміста."
    }, {
        nameOfCourse:"КУРСИ ПРОГРАМУВАННЯ НА МОВАХ С ТА С++",
        description: "Основи програмування на мові С  та об'єктно-орієнтоване програмування на мові С++. Курси програмістів."
    }, {
        nameOfCourse:"КУРСИ ПРОГРАМУВАННЯ В 1С",
        description: "Навчальні курси програмування в програмному середовищі 1С"
    }, {
        nameOfCourse:"КОМП'ЮТЕРНІ КУРСИ ",
        description: "Комп'ютерні курси різних рівнів і напрямів підготовки. "
    }, {
        nameOfCourse:"УНІВЕРСАЛЬНИЙ КУРС",
        description: "Курс вивчення комп'ютера для початківців у Львові."
    }, {
        nameOfCourse:"ПРОГРАМУВАННЯ НА МОВІ JAVASCRIPT",
        description: "Курс вивчення програмування на мові Javascript."
    }, {
        nameOfCourse:"ПРОГРАМНИЙ КОМПЛЕКС ЛІРА-САПР",
        description: "Навчання проектуванню в програмному комплексі ЛІРА."
    }, {
        nameOfCourse:"КОМП'ЮТЕРНА ГРАФІКА",
        description: "Вивчення програм CorelDraw та Photoshop."
    }, {
        nameOfCourse:"КУРСИ INDESIGN",
        description: "Курси  InDesign у Львові. Верстка і макетування, додрукова підготовка в InDesign."
    }, {
        nameOfCourse:"AUTOCAD",
        description: "Проектування в AutoCad та  тривимірне моделювання.",
        link: "/cources/autocad"
    }, {
        nameOfCourse:"MICROSOFT OFFICE",
        description: "Вивчення програм пакету Microsoft Office: Word, Excel, PowerPoint."
    }
]