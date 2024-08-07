import { EduDetail } from "@/types/types"
import React from "react"

export default function EducationDetail({
    index,
    eduDetail,
}: {
    index: number
    eduDetail: EduDetail
}) {
    const borderStyle = index !== 2 ? "border-l-2" : ""
    return (
        <div
            className={`border-black dark:border-white ${borderStyle} relative pl-12 pb-8`}
        >
            <div className="text-semibold text-medium relative top-[-4px]">
                {eduDetail.course}
            </div>
            <p className="text-small">{eduDetail.courseDetail}</p>
            <div className="text-medium w-[16px] h-[16px]  absolute left-[-8px] top-0 rounded-lg bg-black dark:bg-white"></div>
        </div>
    )
}
