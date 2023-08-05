import styles from "./index.module.css"
import Release from "@/components/ui/Release";
import MusicPage from "@/components/view/MusicPage";
import YouTubeVideo from "@/components/ui/YouTubeVideo";
import brandNewDay from "../public/releases/brand-new-day.jpeg";
import keepOnGoing from "../public/releases/keep-on-going.jpeg";
import takeItSlow from "../public/releases/take-it-slow.jpeg";
import randomRoad from "../public/releases/random-road.jpeg";
import { Megaphone, Ticket } from "@phosphor-icons/react";
import august19 from "../public/events/august-19.jpeg";
import Img from "@/components/ui/Img";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Home() {
    return (
        <MusicPage>
            <div className="flex flex-col gap-4">
                <div className="p-4 bg-zinc-800 rounded-lg border-t-zinc-700 border-t">
                    <swiper-container navigation="true" pagination="true" scrollbar="true" loop>
                        <swiper-slide>
                            <Release imageSrc={august19}
                                title={"B-Side Lounge"}>
                                <Button href="https://www.ticketweb.com/event/b-side-patio-series-presents-b-side-lounge-tickets/13435478"><Ticket />Buy Tickets</Button>
                            </Release>
                        </swiper-slide>
                        <swiper-slide>
                            <Release imageSrc={randomRoad}
                                title={"Random Road EP"}
                                spotifyUrl={"https://open.spotify.com/album/4k3pJSqC21jwll71Q7dyUK?si=KMxXpr7MTNaGCe581GDFvw"}
                                appleMusicUrl={"https://music.apple.com/us/album/random-road-ep/1684457684"}>
                            </Release>
                        </swiper-slide>
                        <swiper-slide>
                            <Release imageSrc={takeItSlow}
                                title={"Take It Slow"}
                                spotifyUrl={"https://open.spotify.com/album/4k3pJSqC21jwll71Q7dyUK?si=KMxXpr7MTNaGCe581GDFvw"}
                                appleMusicUrl={"https://music.apple.com/us/album/take-it-slow-single/1632497333"}>
                            </Release>
                        </swiper-slide>
                        <swiper-slide>
                            <Release imageSrc={brandNewDay}
                                title={"Brand New Day"}
                                spotifyUrl={"https://open.spotify.com/album/6bOo7B27gDnbA70Rr4CANU"}
                                appleMusicUrl={"https://music.apple.com/us/album/brand-new-day-single/1551250045"}>
                            </Release>
                        </swiper-slide>
                        <swiper-slide>
                            <Release imageSrc={keepOnGoing}
                                title={"Keep On Going"}
                                spotifyUrl={"https://open.spotify.com/album/6DCADEncWoSO0PSFIHNNhX"}
                                appleMusicUrl={"https://music.apple.com/us/album/keep-on-going-single/1577093788"}>
                            </Release>
                        </swiper-slide>
                    </swiper-container>
                </div>
            </div>
        </MusicPage>
    )
}
