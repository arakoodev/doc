import React, { useState, useEffect, useRef } from 'react'
import Layout from '@theme/Layout'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Lottie from "lottie-react";
import groovyWalkAnimation from "../../static/3d_email.json";


import Slider from "../components/slider";
import ContactForm from "../components/form"
import { CustomGrid, GridItemLeft, GridItemCenter, GridItemRight, Image } from "../components/CostumGrid"
import { frontMatter as featureComaprison } from "../markdown/twillo/featureComaprison.md"
import { frontMatter as featureCarausel } from "../markdown/twillo/featureCarausel.md"
import { frontMatter as Section } from "../markdown/twillo/section.md"
const TwilloPage = () => {
    const fadeInAnimation = {
        hidden: { opacity: 0, transform: "translate3d(0px, 50px, 0px) scale3d(0.5, 0.5, 0.5) rotateX(30deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" },
        visible: { opacity: 1, transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }
    };


    const { ref: ref12, inView: secondInView } = useInView({ threshold: 0.1 });

    const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.3 });
    const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.3 });
    const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.1 });
    const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.3 });
    const { ref: ref5, inView: inView5 } = useInView({ threshold: 0.3 });
    const { ref: ref6, inView: inView6 } = useInView({ threshold: 0.3 });


    const items = [
        'https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63cf74b0c38394e2bc5d04f3_client-logos-.webp',
        'https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63ca4e4bdaa24274775cd90b_client-logo-02.svg',
        'https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63ca4e4bfea0cf714f9736b6_client-logo-03.svg',
        'https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63ca4e4bdaa242ce715cd949_client-logo-04.svg',
        'https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63ca4e4a7a508779c3c012ed_client-logo-05.svg',
        'https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63ca4e4b1618af3dbcb58429_client-logo-06.svg',
        'https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63ca4e4bfea0cf56819736b5_client-logo-07.svg',
        'https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63cf7688673cc0fa55ce35f0_client-logos--6.webp',
        'https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63cf74ad06836dd0297f25c4_client-logos--7.webp',
        'https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63cf74ae45399db130eaa80e_client-logos--8.webp',
        'https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63cf74ae45399dfce9eaa80d_client-logos--9.webp',
        'https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63cf74adef79b3341b8f970c_client-logos--10.webp',
        'https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63cf74adb481df47b4a4704d_client-logos--11.webp',
        'https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63cf74ae102adbc6ca01c012_client-logos--12.webp',
        'https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/642c61f8cd7a7902dd8cc417_Peerlist.webp',
        'https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63cf74af3956e60331ec32ce_client-logos--15.webp'
    ];


    return (
            <Layout>
                <div className='px-10'>
                    <div className=' flex flex-col lg:flex-row w-full gap-4  items-center py-20 justify-around'>

                        <div className="hero_content_wrap flex flex-col items-center lg:items-start justify-center  ">
                            <div className="text-neutral-400">{Section.sect1.title}</div><h1 className="text-3xl text-center lg:text-left lg:text-5xl font-semibold">{Section.sect1.desc}</h1>

                            <div className="feature-flex flex-col text-sm lg:text-base py-4">
                                <div className="fill-neutral-100 align-left flex gap-2 ">
                                    <div className="svg-icon w-embed ">

                                        <svg width="21" height="20" viewBox="0 0 21 20" className='fill-neutral-300' fill="inherit" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.5833 1.66764C13.0691 1.66758 13.546 1.79818 13.9639 2.04575C14.3819 2.29332 14.7256 2.64875 14.9589 3.07479C15.1923 3.50083 15.3068 3.9818 15.2904 4.4673C15.2741 4.95281 15.1274 5.42496 14.8658 5.83431H16.9583C17.5333 5.83431 18 6.30097 18 6.87597V9.79264C18 10.0328 17.9171 10.2656 17.7653 10.4516C17.6134 10.6376 17.402 10.7654 17.1667 10.8135V15.626C17.1667 16.3178 16.902 16.9833 16.4269 17.4862C15.9518 17.989 15.3023 18.291 14.6117 18.3301L14.4583 18.3343H6.54167C5.84989 18.3344 5.18431 18.0697 4.68147 17.5946C4.17864 17.1195 3.87667 16.47 3.8375 15.7793L3.83333 15.626V10.8135C3.35833 10.7168 3 10.2968 3 9.79264V6.87597C3 6.30097 3.46667 5.83431 4.04167 5.83431H6.13417C5.76035 5.25352 5.62255 4.55185 5.74896 3.87283C5.87537 3.19381 6.25643 2.58873 6.8142 2.18137C7.37197 1.77401 8.0643 1.59514 8.74959 1.68134C9.43488 1.76755 10.0613 2.11232 10.5008 2.64514C10.7545 2.33889 11.0728 2.09248 11.4328 1.9235C11.7928 1.75452 12.1856 1.66715 12.5833 1.66764ZM9.875 10.8335H5.08333V15.626C5.08335 15.992 5.22098 16.3446 5.4689 16.6138C5.71682 16.883 6.05692 17.0492 6.42167 17.0793L6.54167 17.0843H9.875V10.8335ZM15.9167 10.8335H11.125V17.0843H14.4583C14.8245 17.0843 15.1772 16.9465 15.4464 16.6984C15.7157 16.4503 15.8817 16.11 15.9117 15.7451L15.9167 15.626V10.8335ZM9.875 7.08431H4.25V9.5843L9.875 9.58347V7.08431ZM16.75 9.5843V7.08431H11.125V9.58347L16.75 9.5843ZM12.5833 2.91764C12.1966 2.91764 11.8256 3.07128 11.5521 3.34477C11.2786 3.61826 11.125 3.9892 11.125 4.37597V5.83347H12.6033L12.7033 5.82931C13.0783 5.79817 13.4267 5.62332 13.6758 5.34128C13.9249 5.05925 14.0553 4.69186 14.0398 4.31592C14.0243 3.93998 13.8641 3.58457 13.5927 3.32398C13.3212 3.0634 12.9596 2.91781 12.5833 2.91764ZM8.41667 2.91764C8.0404 2.91781 7.67877 3.0634 7.40734 3.32398C7.13592 3.58457 6.97572 3.93998 6.96023 4.31592C6.94473 4.69186 7.07514 5.05925 7.3242 5.34128C7.57326 5.62332 7.92169 5.79817 8.29667 5.82931L8.39667 5.83347H9.875V4.37597L9.87 4.25597C9.83988 3.89122 9.67372 3.55113 9.40449 3.3032C9.13526 3.05528 8.78266 2.91765 8.41667 2.91764Z" fill="inherit"></path>
                                        </svg>

                                    </div>
                                    <div className="features-text  text-neutral-300 flex">{Section.sect1.feature[0]}</div>
                                </div>
                                <div className="fill-neutral-100 align-left flex gap-2">
                                    <div className="svg-icon w-embed">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.125 12.082C12.9592 12.082 12.8003 12.1479 12.6831 12.2651C12.5658 12.3823 12.5 12.5413 12.5 12.707C12.5 12.8728 12.5658 13.0318 12.6831 13.149C12.8003 13.2662 12.9592 13.332 13.125 13.332H15.2083C15.3741 13.332 15.5331 13.2662 15.6503 13.149C15.7675 13.0318 15.8333 12.8728 15.8333 12.707C15.8333 12.5413 15.7675 12.3823 15.6503 12.2651C15.5331 12.1479 15.3741 12.082 15.2083 12.082H13.125Z" fill="inherit"></path>
                                            <path d="M3.95768 4.16797C3.34989 4.16797 2.767 4.40941 2.33723 4.83918C1.90746 5.26895 1.66602 5.85185 1.66602 6.45964V13.543C1.66602 14.1508 1.90746 14.7337 2.33723 15.1634C2.767 15.5932 3.34989 15.8346 3.95768 15.8346H16.041C16.6488 15.8346 17.2317 15.5932 17.6615 15.1634C18.0912 14.7337 18.3327 14.1508 18.3327 13.543V6.45964C18.3327 5.85185 18.0912 5.26895 17.6615 4.83918C17.2317 4.40941 16.6488 4.16797 16.041 4.16797H3.95768ZM2.91602 13.543V9.16797H17.0827V13.543C17.0827 14.118 16.616 14.5846 16.041 14.5846H3.95768C3.38268 14.5846 2.91602 14.118 2.91602 13.543ZM2.91602 7.91797V6.45964C2.91602 5.88464 3.38268 5.41797 3.95768 5.41797H16.041C16.616 5.41797 17.0827 5.88464 17.0827 6.45964V7.91797H2.91602Z" fill="inherit"></path>
                                            <path d="M16.6667 2.5L2.5 16.6667" stroke="#212121" stroke-width="2"></path>
                                            <path d="M18.3333 2.5L2.5 18.3333" stroke="white"></path>
                                            <path d="M16.6673 0.832031L0.833984 16.6654" stroke="white"></path>
                                        </svg>
                                    </div>
                                    <div className="features-text">{Section.sect1.feature[1]}</div>
                                </div>
                                <div className="fill-neutral-100 align-left flex gap-2">
                                    <div className="svg-icon w-embed">
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.5833 1.66764C13.0691 1.66758 13.546 1.79818 13.9639 2.04575C14.3819 2.29332 14.7256 2.64875 14.9589 3.07479C15.1923 3.50083 15.3068 3.9818 15.2904 4.4673C15.2741 4.95281 15.1274 5.42496 14.8658 5.83431H16.9583C17.5333 5.83431 18 6.30097 18 6.87597V9.79264C18 10.0328 17.9171 10.2656 17.7653 10.4516C17.6134 10.6376 17.402 10.7654 17.1667 10.8135V15.626C17.1667 16.3178 16.902 16.9833 16.4269 17.4862C15.9518 17.989 15.3023 18.291 14.6117 18.3301L14.4583 18.3343H6.54167C5.84989 18.3344 5.18431 18.0697 4.68147 17.5946C4.17864 17.1195 3.87667 16.47 3.8375 15.7793L3.83333 15.626V10.8135C3.35833 10.7168 3 10.2968 3 9.79264V6.87597C3 6.30097 3.46667 5.83431 4.04167 5.83431H6.13417C5.76035 5.25352 5.62255 4.55185 5.74896 3.87283C5.87537 3.19381 6.25643 2.58873 6.8142 2.18137C7.37197 1.77401 8.0643 1.59514 8.74959 1.68134C9.43488 1.76755 10.0613 2.11232 10.5008 2.64514C10.7545 2.33889 11.0728 2.09248 11.4328 1.9235C11.7928 1.75452 12.1856 1.66715 12.5833 1.66764ZM9.875 10.8335H5.08333V15.626C5.08335 15.992 5.22098 16.3446 5.4689 16.6138C5.71682 16.883 6.05692 17.0492 6.42167 17.0793L6.54167 17.0843H9.875V10.8335ZM15.9167 10.8335H11.125V17.0843H14.4583C14.8245 17.0843 15.1772 16.9465 15.4464 16.6984C15.7157 16.4503 15.8817 16.11 15.9117 15.7451L15.9167 15.626V10.8335ZM9.875 7.08431H4.25V9.5843L9.875 9.58347V7.08431ZM16.75 9.5843V7.08431H11.125V9.58347L16.75 9.5843ZM12.5833 2.91764C12.1966 2.91764 11.8256 3.07128 11.5521 3.34477C11.2786 3.61826 11.125 3.9892 11.125 4.37597V5.83347H12.6033L12.7033 5.82931C13.0783 5.79817 13.4267 5.62332 13.6758 5.34128C13.9249 5.05925 14.0553 4.69186 14.0398 4.31592C14.0243 3.93998 13.8641 3.58457 13.5927 3.32398C13.3212 3.0634 12.9596 2.91781 12.5833 2.91764ZM8.41667 2.91764C8.0404 2.91781 7.67877 3.0634 7.40734 3.32398C7.13592 3.58457 6.97572 3.93998 6.96023 4.31592C6.94473 4.69186 7.07514 5.05925 7.3242 5.34128C7.57326 5.62332 7.92169 5.79817 8.29667 5.82931L8.39667 5.83347H9.875V4.37597L9.87 4.25597C9.83988 3.89122 9.67372 3.55113 9.40449 3.3032C9.13526 3.05528 8.78266 2.91765 8.41667 2.91764Z" fill="inherit"></path>
                                        </svg>
                                    </div>
                                    <div className="features-text">{Section.sect1.feature[2]}</div>
                                </div>
                            </div>
                            <div className="hero_cta_wrapper align-left flex flex-col lg:inline-flex gap-8 h-full lg:pt-10 py-4 ">
                                <a data-w-id="18619ab9-ff9a-d30d-7bdd-986a30c0d5c0" href="https://dev.dyte.io/signup" className="cta-btn glossy w-inline-block inline-flex bg-emerald-400 rounded-md text-neutral-900 font-bold  p-4 max-h-[48px] items-center justify-center hover:shadow-[4px_4px_0_1px_#34d399] hover:bg-neutral-100 hover:text-emerald-700 transition-all ease-in-out duration-300 group gap-4 hover:no-underline">

                                    <div className="glossy_effect" ></div>
                                    <div className="text-block  ">{Section.sect1.cta[0]}</div>
                                    <div className="flex glossy_none_icon w-embed fill-neutral-800 stroke-neutral-800 group-hover:opacity-0 group-hover:hidden">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.33938 1.37116L5.33933 1.37111C5.25663 1.2836 5.15751 1.21324 5.04762 1.16403C4.93774 1.11483 4.81923 1.08776 4.69888 1.08435C4.57853 1.08095 4.45868 1.10128 4.34619 1.14419C4.2337 1.1871 4.13076 1.25175 4.04325 1.33445C3.95574 1.41714 3.88537 1.51626 3.83617 1.62615C3.78697 1.73604 3.75989 1.85454 3.75649 1.97489C3.75308 2.09524 3.77342 2.21509 3.81633 2.32758C3.85923 2.44006 3.92387 2.54298 4.00654 2.63048C4.00656 2.6305 4.00657 2.63051 4.00658 2.63052L9.07909 8.00084L4.00761 13.3714C3.92364 13.4582 3.85767 13.5608 3.81349 13.6733C3.76908 13.7863 3.74757 13.907 3.75022 14.0284C3.75286 14.1498 3.7796 14.2695 3.82889 14.3805C3.87817 14.4915 3.94902 14.5916 4.03732 14.675C4.12561 14.7583 4.22959 14.8233 4.34322 14.8662C4.45684 14.909 4.57785 14.9289 4.69921 14.9246C4.82057 14.9203 4.93987 14.8919 5.05017 14.8411C5.15992 14.7905 5.25858 14.7188 5.34049 14.63L11.006 8.63057C11.006 8.63054 11.006 8.6305 11.006 8.63047C11.1669 8.46029 11.2565 8.23499 11.2565 8.00082C11.2565 7.76664 11.1669 7.54135 11.006 7.37116C11.006 7.37113 11.006 7.3711 11.006 7.37107L5.33938 1.37116Z" fill="inherit" stroke="inherit" stroke-width="0.5"></path>
                                        </svg>
                                    </div>
                                    <div className="hover_icon w-embed opacity-0 hidden group-hover:opacity-100 group-hover:flex fill-emerald-400 stroke-emerald-400">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.62605 1.43396L9.62602 1.43393C9.55235 1.35597 9.46404 1.29328 9.36613 1.24944C9.26823 1.20561 9.16265 1.18148 9.05543 1.17845C8.9482 1.17542 8.84143 1.19353 8.74121 1.23177C8.64098 1.27 8.54927 1.32759 8.47131 1.40127C8.39334 1.47494 8.33065 1.56325 8.28682 1.66115C8.24298 1.75906 8.21886 1.86463 8.21582 1.97186C8.21279 2.07909 8.23091 2.18586 8.26914 2.28608C8.30736 2.38629 8.36495 2.478 8.43862 2.55596C8.43862 2.55597 8.43863 2.55597 8.43864 2.55598L13.576 7.99497L8.44003 13.4338C8.43977 13.4341 8.43952 13.4343 8.43926 13.4346C8.36427 13.5121 8.30536 13.6036 8.26594 13.704C8.22637 13.8047 8.20721 13.9122 8.20957 14.0204C8.21192 14.1286 8.23575 14.2352 8.27966 14.3341C8.32357 14.4329 8.38669 14.5221 8.46535 14.5964C8.54401 14.6707 8.63665 14.7286 8.73788 14.7668C8.83911 14.8049 8.94692 14.8226 9.05504 14.8188C9.16316 14.8149 9.26944 14.7896 9.36771 14.7444C9.46565 14.6993 9.55369 14.6352 9.62674 14.5559C9.62698 14.5556 9.62722 14.5554 9.62746 14.5551L15.2927 8.55601C15.2927 8.55599 15.2927 8.55597 15.2927 8.55595C15.436 8.40432 15.5159 8.2036 15.5159 7.99496C15.5159 7.78632 15.436 7.58559 15.2927 7.43396C15.2927 7.43395 15.2927 7.43393 15.2927 7.43391L9.62605 1.43396Z" fill="inherit" stroke="inherit" stroke-width="0.3"></path>
                                            <path d="M2.01562 8L13.3516 8" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                </a>
                                <a href="/contact" className="sec-btn-light w-inline-block inline-flex group gap-4 justify-center items-center ">

                                    <div>{Section.sect1.cta[1]}</div>

                                    <div className="flex glossy_none_icon w-embed  group-hover:opacity-0 group-hover:hidden">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.33938 1.37116L5.33933 1.37111C5.25663 1.2836 5.15751 1.21324 5.04762 1.16403C4.93774 1.11483 4.81923 1.08776 4.69888 1.08435C4.57853 1.08095 4.45868 1.10128 4.34619 1.14419C4.2337 1.1871 4.13076 1.25175 4.04325 1.33445C3.95574 1.41714 3.88537 1.51626 3.83617 1.62615C3.78697 1.73604 3.75989 1.85454 3.75649 1.97489C3.75308 2.09524 3.77342 2.21509 3.81633 2.32758C3.85923 2.44006 3.92387 2.54298 4.00654 2.63048C4.00656 2.6305 4.00657 2.63051 4.00658 2.63052L9.07909 8.00084L4.00761 13.3714C3.92364 13.4582 3.85767 13.5608 3.81349 13.6733C3.76908 13.7863 3.74757 13.907 3.75022 14.0284C3.75286 14.1498 3.7796 14.2695 3.82889 14.3805C3.87817 14.4915 3.94902 14.5916 4.03732 14.675C4.12561 14.7583 4.22959 14.8233 4.34322 14.8662C4.45684 14.909 4.57785 14.9289 4.69921 14.9246C4.82057 14.9203 4.93987 14.8919 5.05017 14.8411C5.15992 14.7905 5.25858 14.7188 5.34049 14.63L11.006 8.63057C11.006 8.63054 11.006 8.6305 11.006 8.63047C11.1669 8.46029 11.2565 8.23499 11.2565 8.00082C11.2565 7.76664 11.1669 7.54135 11.006 7.37116C11.006 7.37113 11.006 7.3711 11.006 7.37107L5.33938 1.37116Z" fill="currentcolor"></path>
                                        </svg>
                                    </div>
                                    <div className="hover_icon w-embed opacity-0 hidden group-hover:opacity-100 group-hover:flex fill-emerald-400 stroke-emerald-400" >

                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.62605 1.43396L9.62602 1.43393C9.55235 1.35597 9.46404 1.29328 9.36613 1.24944C9.26823 1.20561 9.16265 1.18148 9.05543 1.17845C8.9482 1.17542 8.84143 1.19353 8.74121 1.23177C8.64098 1.27 8.54927 1.32759 8.47131 1.40127C8.39334 1.47494 8.33065 1.56325 8.28682 1.66115C8.24298 1.75906 8.21886 1.86463 8.21582 1.97186C8.21279 2.07909 8.23091 2.18586 8.26914 2.28608C8.30736 2.38629 8.36495 2.478 8.43862 2.55596C8.43862 2.55597 8.43863 2.55597 8.43864 2.55598L13.576 7.99497L8.44003 13.4338C8.43977 13.4341 8.43952 13.4343 8.43926 13.4346C8.36427 13.5121 8.30536 13.6036 8.26594 13.704C8.22637 13.8047 8.20721 13.9122 8.20957 14.0204C8.21192 14.1286 8.23575 14.2352 8.27966 14.3341C8.32357 14.4329 8.38669 14.5221 8.46535 14.5964C8.54401 14.6707 8.63665 14.7286 8.73788 14.7668C8.83911 14.8049 8.94692 14.8226 9.05504 14.8188C9.16316 14.8149 9.26944 14.7896 9.36771 14.7444C9.46565 14.6993 9.55369 14.6352 9.62674 14.5559C9.62698 14.5556 9.62722 14.5554 9.62746 14.5551L15.2927 8.55601C15.2927 8.55599 15.2927 8.55597 15.2927 8.55595C15.436 8.40432 15.5159 8.2036 15.5159 7.99496C15.5159 7.78632 15.436 7.58559 15.2927 7.43396C15.2927 7.43395 15.2927 7.43393 15.2927 7.43391L9.62605 1.43396Z" fill="inherit" stroke="inherit" stroke-width="0.3"></path>
                                            <path d="M2.01562 8L13.3516 8" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className='lg:w-1/2'>
                            <Lottie animationData={groovyWalkAnimation} />
                            {/* <img src="https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63f8f53c60382e69e2d498c2_dytehero-p-800.png" alt="asd" /> */}
                        </div>

                    </div>
                    <div className='flex flex-col justify-center items-center py-8 mb-24'>
                        <h4>{Section.sect2.title}</h4>
                        <div className='relative flex w-screen '>
                            <Slider className='w-screen px-12 ' >
                                {items.map((item, index) => (
                                    <div key={index} className='px-8 py-12' >
                                        <img src={item} loading="lazy" alt="dyte client logo" className="client_logo"></img>

                                    </div>
                                ))}
                            </Slider>

                        </div>

                    </div>
                    <motion.div
                        ref={ref12}
                        initial="hidden"
                        animate={secondInView ? "visible" : "hidden"}
                        variants={fadeInAnimation}
                    >
                        <div className="py-4 flex flex-col justify-center items-center ">

                            <div className="section-head text-center px-4 flex flex-col w-full">
                                <div className="text-style-allcaps text-align-center ">{Section.sect3.subtitle}</div>
                                <h2 className="text-align-center text-3xl lg:text-4xl w-full lg:w-[15em] mx-auto ">{Section.sect3.title}</h2>
                                <p className="section-subhead">{Section.sect3.desc}</p>
                            </div>
                            <div className="features_grid flex flex-col lg:grid grid-cols-2 gap-10 pt-12">
                                <div className="cutomize_medium_card rounded-2xl bg-neutral-800 rounded-2xl bg-neutral-800 ">
                                    <div className="big_card_head_wrap p-8 pb-0 p-8 pb-0">
                                        <h3 className="big_card_head text-2xl">Custom experience without hassle</h3>
                                        <p className="big_card_description _319px_width">Branding, permissions, and custom UI/UX are all a breeze away with our UI Kit.</p>
                                    </div>
                                    <img src="https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63f5b94a207f7c9bbeab8331_custom_experiences.svg" loading="lazy" alt="" />
                                </div>
                                <div className="cutomize_medium_card rounded-2xl bg-neutral-800">
                                    <div className="big_card_head_wrap p-8 pb-0 ">
                                        <h3 className="big_card_head text-2xl">Build more than just video</h3>
                                        <p className="big_card_description _319px_width">Create interactive meetings with one-click plugins and built-in chat &amp; polls.</p>
                                    </div>
                                    <img src="https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63fcbba3127ea415a48983a2_Group%201171275153.svg" loading="lazy" alt="" className="image-5" />
                                </div>
                                <div className="cutomize_medium_card rounded-2xl bg-neutral-800">
                                    <div className="big_card_head_wrap p-8 pb-0">
                                        <h3 className="big_card_head text-2xl">Reduce development effort</h3>
                                        <p className="big_card_description _319px_width">Forget dealing with streams, edge-cases, and writing 1000s of lines of code.</p></div>
                                    <img src="https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63f5ba9196b5b6e266448ad8_Frame%201171275683reducedeveffort%20(1).webp" loading="lazy" sizes="(max-width: 479px) 86vw, (max-width: 767px) 91vw, (max-width: 991px) 45vw, 46vw" srcset="https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63f5ba9196b5b6e266448ad8_Frame%201171275683reducedeveffort%20(1)-p-500.webp 500w, https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63f5ba9196b5b6e266448ad8_Frame%201171275683reducedeveffort%20(1)-p-800.webp 800w, https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63f5ba9196b5b6e266448ad8_Frame%201171275683reducedeveffort%20(1).webp 1056w" alt="" /></div>
                                <div className="cutomize_medium_card rounded-2xl bg-neutral-800">
                                    <div className="big_card_head_wrap p-8 pb-0">
                                        <h3 className="big_card_head text-2xl">Better call completion rates</h3>
                                        <p className="big_card_description _319px_width">Ensure your video always runs smoothly no matter the network conditions.</p>
                                    </div>
                                    <img src="https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63f5ba91cf2e7b07a4257cc5_Frame%201171275683bettercallcompletion.svg" loading="lazy" alt="" />

                                </div>
                            </div>
                            <div className='py-16 flex justify-center w-full lg:w-fit'>
                                <a data-w-id="18619ab9-ff9a-d30d-7bdd-986a30c0d5c0" href="https://dev.dyte.io/signup" className="cta-btn w-full glossy w-inline-block inline-flex bg-emerald-400 rounded-md text-neutral-900 font-bold  p-4 max-h-[48px] items-center justify-center hover:shadow-[4px_4px_0_1px_#34d399] hover:bg-neutral-100 hover:text-emerald-700 transition-all ease-in-out duration-300 group gap-4 hover:no-underline">

                                    <div className="glossy_effect" ></div>
                                    <div className="text-block  ">{Section.sect3.cta}</div>
                                    <div className="flex glossy_none_icon w-embed fill-neutral-800 stroke-neutral-800 group-hover:opacity-0 group-hover:hidden">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.33938 1.37116L5.33933 1.37111C5.25663 1.2836 5.15751 1.21324 5.04762 1.16403C4.93774 1.11483 4.81923 1.08776 4.69888 1.08435C4.57853 1.08095 4.45868 1.10128 4.34619 1.14419C4.2337 1.1871 4.13076 1.25175 4.04325 1.33445C3.95574 1.41714 3.88537 1.51626 3.83617 1.62615C3.78697 1.73604 3.75989 1.85454 3.75649 1.97489C3.75308 2.09524 3.77342 2.21509 3.81633 2.32758C3.85923 2.44006 3.92387 2.54298 4.00654 2.63048C4.00656 2.6305 4.00657 2.63051 4.00658 2.63052L9.07909 8.00084L4.00761 13.3714C3.92364 13.4582 3.85767 13.5608 3.81349 13.6733C3.76908 13.7863 3.74757 13.907 3.75022 14.0284C3.75286 14.1498 3.7796 14.2695 3.82889 14.3805C3.87817 14.4915 3.94902 14.5916 4.03732 14.675C4.12561 14.7583 4.22959 14.8233 4.34322 14.8662C4.45684 14.909 4.57785 14.9289 4.69921 14.9246C4.82057 14.9203 4.93987 14.8919 5.05017 14.8411C5.15992 14.7905 5.25858 14.7188 5.34049 14.63L11.006 8.63057C11.006 8.63054 11.006 8.6305 11.006 8.63047C11.1669 8.46029 11.2565 8.23499 11.2565 8.00082C11.2565 7.76664 11.1669 7.54135 11.006 7.37116C11.006 7.37113 11.006 7.3711 11.006 7.37107L5.33938 1.37116Z" fill="inherit" stroke="inherit" stroke-width="0.5"></path>
                                        </svg>
                                    </div>
                                    <div className="hover_icon w-embed opacity-0 hidden group-hover:opacity-100 group-hover:flex fill-emerald-400 stroke-emerald-400">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.62605 1.43396L9.62602 1.43393C9.55235 1.35597 9.46404 1.29328 9.36613 1.24944C9.26823 1.20561 9.16265 1.18148 9.05543 1.17845C8.9482 1.17542 8.84143 1.19353 8.74121 1.23177C8.64098 1.27 8.54927 1.32759 8.47131 1.40127C8.39334 1.47494 8.33065 1.56325 8.28682 1.66115C8.24298 1.75906 8.21886 1.86463 8.21582 1.97186C8.21279 2.07909 8.23091 2.18586 8.26914 2.28608C8.30736 2.38629 8.36495 2.478 8.43862 2.55596C8.43862 2.55597 8.43863 2.55597 8.43864 2.55598L13.576 7.99497L8.44003 13.4338C8.43977 13.4341 8.43952 13.4343 8.43926 13.4346C8.36427 13.5121 8.30536 13.6036 8.26594 13.704C8.22637 13.8047 8.20721 13.9122 8.20957 14.0204C8.21192 14.1286 8.23575 14.2352 8.27966 14.3341C8.32357 14.4329 8.38669 14.5221 8.46535 14.5964C8.54401 14.6707 8.63665 14.7286 8.73788 14.7668C8.83911 14.8049 8.94692 14.8226 9.05504 14.8188C9.16316 14.8149 9.26944 14.7896 9.36771 14.7444C9.46565 14.6993 9.55369 14.6352 9.62674 14.5559C9.62698 14.5556 9.62722 14.5554 9.62746 14.5551L15.2927 8.55601C15.2927 8.55599 15.2927 8.55597 15.2927 8.55595C15.436 8.40432 15.5159 8.2036 15.5159 7.99496C15.5159 7.78632 15.436 7.58559 15.2927 7.43396C15.2927 7.43395 15.2927 7.43393 15.2927 7.43391L9.62605 1.43396Z" fill="inherit" stroke="inherit" stroke-width="0.3"></path>
                                            <path d="M2.01562 8L13.3516 8" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </motion.div>


                    <div className='py-12 '>
                        <motion.div
                            ref={ref2}
                            initial="hidden"
                            animate={inView2 ? "visible" : "hidden"}
                            variants={fadeInAnimation}
                        >

                            <div className="ph-card flex flex-col lg:flex-row items-center justify-center py-8 bg-neutral-800 gap-8 lg:gap-16 p-8 lg:p-0">
                                <div className="space-1 lg:w-1/2">
                                    <h3 className="heading-2 text-3xl font-bold ">{Section.sect4.title}</h3>
                                    <p className="cta-subtext text-neutral-400">{Section.sect4.desc}</p>
                                </div>
                                <div>
                                    <div className="w-embed ">
                                        <a href="https://www.producthunt.com/posts/live-video-calling-sdk-by-dyte?utm_source=badge-top-post-badge&amp;utm_medium=badge&amp;utm_souce=badge-live-video-calling-sdk-by-dyte" target="_blank">
                                            <img src={Section.sect4.img} alt="Live Video Calling SDK by Dyte - Integrate into your product within minutes | Product Hunt" width="350" height="75" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </motion.div>

                    </div>


                    <motion.div
                        ref={ref3}
                        initial="hidden"
                        animate={inView3 ? "visible" : "hidden"}
                        variants={fadeInAnimation}>
                        <div className="section-head flex flex-col justify-center items-center text-center">
                            <h3 className="text-style-allcaps text-align-center capitalize text-xl font-base">{Section.sect5.subtitle}</h3>
                            <h2 className="text-align-center text-4xl">{Section.sect5.title}</h2>
                            <p className="section-subhead text-neutral-500">{Section.sect5.desc}</p>
                        </div>


                        <div className='hidden lg:block border border-solid border-neutral-200 rounded-xl '>
                            <div className=' grid grid-cols-3 sticky top-14 bg-neutral-600 rounded-t-xl border-neutral-600'>

                                <div className="table-header-item center ">
                                </div>

                                <div className="table-header-item center  flex justify-center items-center border border-y-0 border-solid py-[24px] border-neutral-500">
                                    <img loading="lazy" alt="dyte logo" src="https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63caaeb042a0775de3e30f22_dyte-logo.svg" />
                                </div>
                                <div className="table-header-item flex justify-center items-center border border-y-0 border-solid py-[24px] border-neutral-500" >
                                    <img loading="lazy" alt="" src="https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63f5bdb9f8a9892603e9811c_twilo.svg" />
                                </div>

                            </div>

                            {featureComaprison.data.map(feature => (
                                <CustomGrid>
                                    <GridItemLeft title={feature.name} />
                                    <GridItemCenter>
                                        {feature.left.images ?
                                            <div className='w-full flex justify-center gap-2'>
                                                {feature.left.images.map(node => (
                                                    <Image alt={node.alt} src={node.src} />
                                                ))}

                                            </div>
                                            :
                                            <div>
                                                {feature.left}
                                            </div>}
                                    </GridItemCenter>
                                    <GridItemRight>
                                        {feature.right.images ?
                                            <div className='w-full flex justify-center gap-2'>
                                                {feature.right.images.map(node => (
                                                    <Image alt={node.alt} src={node.src} />
                                                ))}

                                            </div>
                                            :
                                            <div>
                                                {feature.right}
                                            </div>}


                                    </GridItemRight>
                                </CustomGrid>
                            ))}

                        </div>
                    </motion.div>

                    <motion.div
                        ref={ref4}
                        initial="hidden"
                        animate={inView4 ? "visible" : "hidden"}
                        variants={fadeInAnimation}>
                        <div class="flex items-center justify-center pt-12 pb-8">{Section.sect6.title}</div>
                        <div className='w-[90vw]'>
                            <div className=''></div>
                            <Slider feature={true} className='w-[90vw] ' >
                                {featureCarausel.images.top.map(node => (
                                    <div className=''>
                                        <img src={`${node.img}`} alt="" />
                                        {node.name}
                                    </div>
                                ))}
                                {featureCarausel.images.top.map(node => (
                                    <div className=''>
                                        <img src={`${node.img}`} alt="" />
                                        {node.name}
                                    </div>
                                ))}
                            </Slider>
                            <Slider feature={true} rtl={true} className='w-[90vw]' >
                                {featureCarausel.images.top.map(node => (
                                    <div className=''>
                                        <img src={`${node.img}`} alt="" />
                                        {node.name}
                                    </div>
                                ))}
                                {featureCarausel.images.top.map(node => (
                                    <div className=''>
                                        <img src={`${node.img}`} alt="" />
                                        {node.name}
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <div className='py-16 flex justify-center '>
                            <a data-w-id="18619ab9-ff9a-d30d-7bdd-986a30c0d5c0" href="https://dev.dyte.io/signup" className="cta-btn glossy w-inline-block inline-flex bg-emerald-400 rounded-md text-neutral-900 font-bold  p-4 max-h-[48px] items-center justify-center hover:shadow-[4px_4px_0_1px_#34d399] hover:bg-neutral-100 hover:text-emerald-700 transition-all ease-in-out duration-300 group gap-4 hover:no-underline">

                                <div className="glossy_effect" ></div>
                                <div className="text-block  ">{Section.sect6.cta}</div>
                                <div className="flex glossy_none_icon w-embed fill-neutral-800 stroke-neutral-800 group-hover:opacity-0 group-hover:hidden">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.33938 1.37116L5.33933 1.37111C5.25663 1.2836 5.15751 1.21324 5.04762 1.16403C4.93774 1.11483 4.81923 1.08776 4.69888 1.08435C4.57853 1.08095 4.45868 1.10128 4.34619 1.14419C4.2337 1.1871 4.13076 1.25175 4.04325 1.33445C3.95574 1.41714 3.88537 1.51626 3.83617 1.62615C3.78697 1.73604 3.75989 1.85454 3.75649 1.97489C3.75308 2.09524 3.77342 2.21509 3.81633 2.32758C3.85923 2.44006 3.92387 2.54298 4.00654 2.63048C4.00656 2.6305 4.00657 2.63051 4.00658 2.63052L9.07909 8.00084L4.00761 13.3714C3.92364 13.4582 3.85767 13.5608 3.81349 13.6733C3.76908 13.7863 3.74757 13.907 3.75022 14.0284C3.75286 14.1498 3.7796 14.2695 3.82889 14.3805C3.87817 14.4915 3.94902 14.5916 4.03732 14.675C4.12561 14.7583 4.22959 14.8233 4.34322 14.8662C4.45684 14.909 4.57785 14.9289 4.69921 14.9246C4.82057 14.9203 4.93987 14.8919 5.05017 14.8411C5.15992 14.7905 5.25858 14.7188 5.34049 14.63L11.006 8.63057C11.006 8.63054 11.006 8.6305 11.006 8.63047C11.1669 8.46029 11.2565 8.23499 11.2565 8.00082C11.2565 7.76664 11.1669 7.54135 11.006 7.37116C11.006 7.37113 11.006 7.3711 11.006 7.37107L5.33938 1.37116Z" fill="inherit" stroke="inherit" stroke-width="0.5"></path>
                                    </svg>
                                </div>
                                <div className="hover_icon w-embed opacity-0 hidden group-hover:opacity-100 group-hover:flex fill-emerald-400 stroke-emerald-400">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.62605 1.43396L9.62602 1.43393C9.55235 1.35597 9.46404 1.29328 9.36613 1.24944C9.26823 1.20561 9.16265 1.18148 9.05543 1.17845C8.9482 1.17542 8.84143 1.19353 8.74121 1.23177C8.64098 1.27 8.54927 1.32759 8.47131 1.40127C8.39334 1.47494 8.33065 1.56325 8.28682 1.66115C8.24298 1.75906 8.21886 1.86463 8.21582 1.97186C8.21279 2.07909 8.23091 2.18586 8.26914 2.28608C8.30736 2.38629 8.36495 2.478 8.43862 2.55596C8.43862 2.55597 8.43863 2.55597 8.43864 2.55598L13.576 7.99497L8.44003 13.4338C8.43977 13.4341 8.43952 13.4343 8.43926 13.4346C8.36427 13.5121 8.30536 13.6036 8.26594 13.704C8.22637 13.8047 8.20721 13.9122 8.20957 14.0204C8.21192 14.1286 8.23575 14.2352 8.27966 14.3341C8.32357 14.4329 8.38669 14.5221 8.46535 14.5964C8.54401 14.6707 8.63665 14.7286 8.73788 14.7668C8.83911 14.8049 8.94692 14.8226 9.05504 14.8188C9.16316 14.8149 9.26944 14.7896 9.36771 14.7444C9.46565 14.6993 9.55369 14.6352 9.62674 14.5559C9.62698 14.5556 9.62722 14.5554 9.62746 14.5551L15.2927 8.55601C15.2927 8.55599 15.2927 8.55597 15.2927 8.55595C15.436 8.40432 15.5159 8.2036 15.5159 7.99496C15.5159 7.78632 15.436 7.58559 15.2927 7.43396C15.2927 7.43395 15.2927 7.43393 15.2927 7.43391L9.62605 1.43396Z" fill="inherit" stroke="inherit" stroke-width="0.3"></path>
                                        <path d="M2.01562 8L13.3516 8" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        ref={ref5}
                        initial="hidden"
                        animate={inView5 ? "visible" : "hidden"}
                        variants={fadeInAnimation}>
                        <div className='flex flex-col lg:flex-row border border-solid border-neutral-500 rounded-xl my-12 '>
                            <div class="support-cta-content p-10">
                                <h3 class="heading-2 text-4xl">{Section.sect7.title}</h3>
                                <p class="cta-subtext">{Section.sect7.desc}</p>
                                <a data-w-id="18619ab9-ff9a-d30d-7bdd-986a30c0d5c0" href="https://dev.dyte.io/signup" className="cta-btn glossy w-inline-block inline-flex bg-emerald-400 rounded-md text-neutral-900 font-bold  p-4 max-h-[48px] items-center justify-center hover:shadow-[4px_4px_0_1px_#34d399] hover:bg-neutral-100 hover:text-emerald-700 transition-all ease-in-out duration-300 group gap-4 hover:no-underline">

                                    <div className="glossy_effect" ></div>
                                    <div className="text-block  ">{Section.sect7.cta}</div>
                                    <div className="flex glossy_none_icon w-embed fill-neutral-800 stroke-neutral-800 group-hover:opacity-0 group-hover:hidden">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.33938 1.37116L5.33933 1.37111C5.25663 1.2836 5.15751 1.21324 5.04762 1.16403C4.93774 1.11483 4.81923 1.08776 4.69888 1.08435C4.57853 1.08095 4.45868 1.10128 4.34619 1.14419C4.2337 1.1871 4.13076 1.25175 4.04325 1.33445C3.95574 1.41714 3.88537 1.51626 3.83617 1.62615C3.78697 1.73604 3.75989 1.85454 3.75649 1.97489C3.75308 2.09524 3.77342 2.21509 3.81633 2.32758C3.85923 2.44006 3.92387 2.54298 4.00654 2.63048C4.00656 2.6305 4.00657 2.63051 4.00658 2.63052L9.07909 8.00084L4.00761 13.3714C3.92364 13.4582 3.85767 13.5608 3.81349 13.6733C3.76908 13.7863 3.74757 13.907 3.75022 14.0284C3.75286 14.1498 3.7796 14.2695 3.82889 14.3805C3.87817 14.4915 3.94902 14.5916 4.03732 14.675C4.12561 14.7583 4.22959 14.8233 4.34322 14.8662C4.45684 14.909 4.57785 14.9289 4.69921 14.9246C4.82057 14.9203 4.93987 14.8919 5.05017 14.8411C5.15992 14.7905 5.25858 14.7188 5.34049 14.63L11.006 8.63057C11.006 8.63054 11.006 8.6305 11.006 8.63047C11.1669 8.46029 11.2565 8.23499 11.2565 8.00082C11.2565 7.76664 11.1669 7.54135 11.006 7.37116C11.006 7.37113 11.006 7.3711 11.006 7.37107L5.33938 1.37116Z" fill="inherit" stroke="inherit" stroke-width="0.5"></path>
                                        </svg>
                                    </div>
                                    <div className="hover_icon w-embed opacity-0 hidden group-hover:opacity-100 group-hover:flex fill-emerald-400 stroke-emerald-400">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.62605 1.43396L9.62602 1.43393C9.55235 1.35597 9.46404 1.29328 9.36613 1.24944C9.26823 1.20561 9.16265 1.18148 9.05543 1.17845C8.9482 1.17542 8.84143 1.19353 8.74121 1.23177C8.64098 1.27 8.54927 1.32759 8.47131 1.40127C8.39334 1.47494 8.33065 1.56325 8.28682 1.66115C8.24298 1.75906 8.21886 1.86463 8.21582 1.97186C8.21279 2.07909 8.23091 2.18586 8.26914 2.28608C8.30736 2.38629 8.36495 2.478 8.43862 2.55596C8.43862 2.55597 8.43863 2.55597 8.43864 2.55598L13.576 7.99497L8.44003 13.4338C8.43977 13.4341 8.43952 13.4343 8.43926 13.4346C8.36427 13.5121 8.30536 13.6036 8.26594 13.704C8.22637 13.8047 8.20721 13.9122 8.20957 14.0204C8.21192 14.1286 8.23575 14.2352 8.27966 14.3341C8.32357 14.4329 8.38669 14.5221 8.46535 14.5964C8.54401 14.6707 8.63665 14.7286 8.73788 14.7668C8.83911 14.8049 8.94692 14.8226 9.05504 14.8188C9.16316 14.8149 9.26944 14.7896 9.36771 14.7444C9.46565 14.6993 9.55369 14.6352 9.62674 14.5559C9.62698 14.5556 9.62722 14.5554 9.62746 14.5551L15.2927 8.55601C15.2927 8.55599 15.2927 8.55597 15.2927 8.55595C15.436 8.40432 15.5159 8.2036 15.5159 7.99496C15.5159 7.78632 15.436 7.58559 15.2927 7.43396C15.2927 7.43395 15.2927 7.43393 15.2927 7.43391L9.62605 1.43396Z" fill="inherit" stroke="inherit" stroke-width="0.3"></path>
                                            <path d="M2.01562 8L13.3516 8" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                            <img className='lg:w-3/5' src={Section.sect7.img} alt="" />
                        </div>
                    </motion.div>
                    <motion.div
                        ref={ref6}
                        initial="visible"
                        animate={inView6 ? "visible" : "hidden"}
                        variants={fadeInAnimation}>

                        <div className='py-12 flex flex-col'>
                            <div class="section-head flex flex-col justify-center items-center">
                                <p class="text-style-allcaps text-align-center m-0 ">{Section.sect8.subtitle}</p>
                                <h2 class="text-align-center text-3xl">{Section.sect8.title}</h2>

                            </div>
                            <div className='flex gap-2 justify-between pt-12 flex-col-reverse lg:flex-row '>
                                <div class="contact_form_left_wrap logo-justify lg:w-1/3 flex flex-col relative pt-12">

                                    <img src="https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63d276dc093634833ace874c_big-quote.svg" loading="lazy" alt="" class="big_quote_image absolute top-0 bottom-auto  left-0 right-auto" />
                                    <p class="testimonial-description-small pt-4">“We wanted to bring a video based interaction with users on our platform.

                                        <span class="text-color-black-description font-bold">Dyte checked all the right boxes</span> for us!”</p>
                                    <div class="client-details-text flex gap-4 py-2">
                                        <div>
                                            <img src="https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63d279e69281b772220d7fdb_Sairee%20Chahal.webp" loading="lazy" alt="client image" class="client-dp w-[48px] h-auto " />
                                        </div>
                                        <div>
                                            <div class="client font-bold">Sairee Chahal</div>
                                            <div class="client text-weight-medium">Founder &amp; CEO, Mahila Money</div>
                                        </div>
                                    </div>
                                    <div class="client_logos_contact_us align-end mt-auto flex flex-col items-start">
                                        <p class="text-style-allcaps">TRUSTED BY THE BEST PRODUCT TEAMS</p>
                                        <div class="w-layout-grid client_logos_grid grid grid-cols-3 grid-rows-3 gap-4">
                                            <div id="w-node-_3e1b67ad-0fc7-57b4-19b5-cf024c9ebbb7-72b4c004 " class="saturate-0 flex justify-center items-center">
                                                <img src="https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63cf74b0c38394e2bc5d04f3_client-logos-.webp" loading="lazy" alt="dyte client logo" class="max-w-[90%]" />
                                            </div>
                                            <div id="w-node-_3e1b67ad-0fc7-57b4-19b5-cf024c9ebbb9-72b4c004" class="saturate-0 flex justify-center items-center">
                                                <img src="https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63cf74afd154ef03408a636c_client-logos--16.webp" loading="lazy" alt="dyte client logo" class="max-w-[90%]" />
                                            </div>
                                            <div id="w-node-_3e1b67ad-0fc7-57b4-19b5-cf024c9ebbbb-72b4c004" class="saturate-0 flex justify-center items-center">
                                                <img src="https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63cf74ad79a01b39a2cfa446_client-logos--5.webp" loading="lazy" alt="dyte client logo" class="max-w-[90%] small" />
                                            </div>
                                            <div id="w-node-_3e1b67ad-0fc7-57b4-19b5-cf024c9ebbbd-72b4c004" class="saturate-0 flex justify-center items-center">
                                                <img src="https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63cf74ac99c76236941f4a31_client-logos--1.webp" loading="lazy" alt="dyte client logo" class="max-w-[90%] small" />
                                            </div>
                                            <div id="w-node-_3e1b67ad-0fc7-57b4-19b5-cf024c9ebbbf-72b4c004" class="saturate-0 flex justify-center items-center">
                                                <img src="https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63cf74ac45399d81e8eaa7e3_client-logos--3.webp" loading="lazy" alt="dyte client logo" class="max-w-[90%] small" />
                                            </div>
                                            <div id="w-node-_3e1b67ad-0fc7-57b4-19b5-cf024c9ebbc1-72b4c004" class="saturate-0 flex justify-center items-center">
                                                <img src="https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63cf7688673cc0fa55ce35f0_client-logos--6.webp" loading="lazy" alt="dyte client logo" class="max-w-[90%] small" />
                                            </div>
                                            <div id="w-node-_3e1b67ad-0fc7-57b4-19b5-cf024c9ebbc3-72b4c004" class="saturate-0 flex justify-center items-center">
                                                <img src="https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63cf74adf8b7c101d37a9129_client-logos--2.webp" loading="lazy" alt="dyte client logo" class="max-w-[90%] small" />
                                            </div>
                                            <div id="w-node-_3e1b67ad-0fc7-57b4-19b5-cf024c9ebbc5-72b4c004" class="saturate-0 flex justify-center items-center">
                                                <img src="https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63cf74ac8a6b0d2812bb7df6_client-logos--4.webp" loading="lazy" alt="dyte client logo" class="max-w-[90%] small" />
                                            </div>
                                            <div id="w-node-_3e1b67ad-0fc7-57b4-19b5-cf024c9ebbc7-72b4c004" class="saturate-0 flex justify-center items-center">
                                                <img src="https://uploads-ssl.webflow.com/63ca2acc6352c221abe583d0/63cf74af3956e60331ec32ce_client-logos--15.webp" loading="lazy" alt="dyte client logo" class="max-w-[90%] small" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:w-1/2 py-8'>
                                    <ContactForm />
                                </div>
                            </div>

                        </div>

                    </motion.div>
                </div>
            </Layout >
    )
}

export default TwilloPage