import React from "react"
import EduDetail from "./EducationDetail"
import { eduDetails } from "@/data/data"
import EducationDetail from "./EducationDetail"

export default function Education() {
    return (
        <section className="out-container" id="education">
            <div className="in-container">
                <div className="text-2xl pb-4 flex justify-center">
                    Education
                </div>
                <div className="flex justify-start flex-col">
                    {eduDetails.map((eduDetail, index) => {
                        return (
							<EducationDetail
								key={index}
                                index={index}
                                eduDetail={eduDetail}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
