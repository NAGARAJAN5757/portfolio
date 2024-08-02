import {
    Button,
    Divider,
    Chip,
    Link,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
} from "@nextui-org/react"
import React from "react"
import Image from "next/image"
import { projects } from "@/data/data"

export default function Projects() {
    return (
        <section className="out-container" id="projects">
            <div className="inner-container">
                <div className="text-2xl pb-4 text-center flex justify-center">
                    Projects
                </div>
                {projects.map((project, index) => {
                    return (
                        <Card
                            key={index}
                            className="dark:bg-[#18181B] bg-[#FFFFFF] mt-2"
                        >
                            <CardHeader className="flex justify-center p-4">
                                {project.title}
                            </CardHeader>
                            <Divider />
                            <CardBody>
                                <div className="flex justify-center">
                                    <Image
                                        src={project.image}
                                        alt="pdf"
                                        width={120}
                                        height={120}
                                        className="w-[50vw] h-[25%] sm:w-[35vw] sm:h-[30vh] p-4"
                                    />
                                    <p className="flex self-center p-4">
                                        {project.description}
                                    </p>
                                </div>
                            </CardBody>
                            <Divider />
                            <CardFooter className="p-3 flex justify-around flex-wrap md:flex-nowrap">
                                <Button
                                    size="md"
                                    color="primary"
                                    as={Link}
                                    href={project.link}
                                    target="_blank"
                                >
                                    View Source Code
                                </Button>
                                <div className="flex pt-2 gap-4">
                                    {project.technologies.map(
                                        (technology, index) => {
                                            return (
                                                <Chip
                                                    key={index}
                                                    color="secondary"
                                                    size="sm"
                                                >
                                                    {technology}
                                                </Chip>
                                            )
                                        }
                                    )}
                                </div>
                            </CardFooter>
                        </Card>
                    )
                })}
            </div>
        </section>
    )
}
