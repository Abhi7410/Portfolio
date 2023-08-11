import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon
          className={
            "flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"
          }
        />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {" "}
            03.
          </span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {/* // ?  Project  1*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <div
                // onClick={}
                className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
              ></div>

              <Img
                src={"/img/stackovreflow.jpeg"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/stackoverflow.jpeg"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  DupPredictor{" "}
                </span>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    StackOverflow Duplicate Question Predictor
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right ">
                  Implemented{" "}
                  <span className="text-AAsecondary">DupPredictor</span> which
                  takes input a new question and gives output in form of k
                  duplicate questions as the output by considering multiple
                  factors like{" "}
                  <span className="text-AAsecondary">
                    Title, Body, Tag and Latent topics{" "}
                  </span>
                  similarity.
                  <br />
                  PreProcessing techniques like{" "}
                  <span className="text-AAsecondary">
                    Stemming, Lemmatization, Stopwords removal, Tokenization
                  </span>{" "}
                  are used for cleaning the data.
                  <br />
                  <span className="text-AAsecondary">
                    Latent Dirichlet Allocation
                  </span>{" "}
                  is used for finding the latent topics in the data. Interface
                  using Python library{" "}
                  <span className="text-AAsecondary">tkinter</span> is also
                  implemented.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Python</span>
                <span className="pr-4 z-10">NLTK</span>
                <span className="pr-4 z-10">Numpy/Pandas</span>
                <span className="pr-4 z-10">Gensim</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/Abhi7410/StackOverFlow_Duplicate_Question_Detection/" />
                <a href="" target={"_blank"} rel="noreferrer"></a>
                <a href="" target={"_blank"} rel="noreferrer">
                  {/* <ExternalLink url={""} router={router} /> */}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 2 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href={""} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"/img/digitSumCNN.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/img/digitSumCNN.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Image Processing
                </span>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Digit Sum CNN
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  Used Image Processing techniques like{" "}
                  <span className="text-AAsecondary">
                    Thresholding, Contouring, Morphological Transformations{" "}
                  </span>
                  to extract the digits from the image containing multiple
                  digits. <br />
                  Implemented a <span className="text-AAsecondary">
                    CNN
                  </span>{" "}
                  model to predict the sum of the digits using
                  <span className="text-AAsecondary"> Keras</span> and{" "}
                  <span className="text-AAsecondary">Tensorflow</span>. CNN
                  model is trained on{" "}
                  <span className="text-AAsecondary">MNIST</span> dataset and
                  achieved an accuracy of{" "}
                  <span className="text-AAsecondary">99.5%</span>. This model is
                  then used to predict the sum of the digits extracted from the
                  image.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Python</span>
                <span className="pr-4 z-10">OpenCV</span>
                <span className="pr-4 z-10">Tensorflow</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/Abhi7410/DigitsSumNeuralNetwork" />
                {/* <a
                  href="https://ubiquitous-bublanina-da84ec.netlify.app/"
                  target={"_blank"}
                  rel="noreferrer"
                > */}
                {/* <ExternalLink url={""} router={router} /> */}
                {/* </a> */}
              </div>
            </div>
          </div>
        </div>
        {/* // ?  Project  3*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <Link href={"/typing"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>

              <Img
                src={"/img/wsd.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/img/wsd.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  Natural Language Processing 
                </span>
                <Link href={"/typing"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Word Sense Disambiguation
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  Worked on task to find correct meaning of word given context, which can be building block for 
                  vaious high-level NLP tasks. <span className="text-AAsecondary">Semcor, SemEval and SensEval</span> datasets are 
                  used for the model training and model evaluation. Used  <span className="text-AAsecondary">BERT Fine Tuning</span> for 
                  for sequence pair binary classification. Other than  <span className="text-AAsecondary"> Attention</span> based approaches
                  , used few supervised and knowledge based algorithms for benchmarking.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Pytorch</span>
                <span className="pr-4 z-10">Python</span>
                <span className="pr-4 z-10">Transformers</span>
                <span className="pr-4 z-10"></span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/hktitof/Typing" />
                <ExternalLink url={"typing"} router={router} />
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 4 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
                <div
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              <Img
                src={"/img/twoPhase.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-[450px] `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/img/twoPhase.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Distributed Systems
                </span>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Two Phase Commit Protocol
                  </span>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  This project aim to simulate the{" "}
                  <span className="text-AAsecondary">
                    {" "}
                    Two Phase Commit Protocol{" "}
                  </span>{" "}
                  in a distributed system. The{" "}
                  <span className="text-AAsecondary"> coordinator </span> will
                  send a{" "}
                  <span className="text-AAsecondary"> vote request </span> to
                  all the{" "}
                  <span className="text-AAsecondary"> participants </span> and
                  wait for their{" "}
                  <span className="text-AAsecondary"> vote </span> to decide
                  whether to <span className="text-AAsecondary"> commit </span>{" "}
                  or <span className="text-AAsecondary"> abort </span> the{" "}
                  <span className="text-AAsecondary"> transaction </span>.
                  
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Python</span>
                <span className="pr-4 z-10">Flask</span>
                <span className="pr-4 z-10">MySQL</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/Abhi7410/Two-Phase-Commit-Protocol" />
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
