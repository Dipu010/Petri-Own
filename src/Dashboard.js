import React from "react";
import { ChevronRight, Home, Mail, Save } from "react-feather";
import { Link } from "react-router-dom";
import BasicModal from "./components/modal/modal1";
import BasicModal2 from "./components/modal/modal2";

export const Dashboard = () => {
  return (
    <div>
      <div className="intro-y grid grid-cols-12 gap-10 mt-5">
        <div className="col-span-12 lg:col-span-6 mb">
          <div className="intro-y box h-full">
            <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <h2 className="font-medium text-base mr-auto">Petri Net</h2>
            </div>
            <div className="p-5">
              {/* <div className="text-center lg:text-left p-5">
                            <div className="mb-3">This tool is focused on the most common class of PNs, called <em>place/transition net</em>. It is a purely logic model that does not aim to represent the occurrence time of events, but only the order in which events occur.</div>
                            <div className="mb-3">You first need to draw a net using the <strong>Petri Net Editor</strong> feature and then you can obtain a detailed <strong>Analysis</strong> of the net.</div>
                            <div className="mb-3">Several analysis techniques have been presented in the literature. In this tool I focused on <em>analysis by enumeration</em>, also called <em>behavioral analysis</em> that depends on initial marking and requires the construction of the <strong>reachability graph</strong> and <strong>reachability tree</strong> of the net representing the set of all reachable markings and transition firings, along with other several properties such as <strong>boundedness</strong>, <strong>liveness</strong> and <strong>reversibility</strong>.</div>
                            <div>The <em>structural analysis</em>, on the other hand, does not depend on initial marking but on the state equation of the net. It permits the analysis of properties related to the structure of the net such as <strong>incidence matrix</strong>, <strong>T-invariants</strong>, <strong>S-invariants</strong> and <strong>siphons & traps</strong>.</div>
                        </div> */}
              <div className="text-center lg:text-left p-5">
                <div className="mb-3">
                  A Petri net, also known as a place/transition net (PT net), is
                  one of several mathematical modeling languages for the
                  description of distributed systems. It is a class of discrete
                  event dynamic system. A Petri net is a directed bipartite
                  graph that has two types of elements: places and transitions.
                  Place elements are depicted as white circles and transition
                  elements are depicted as rectangles. A place can contain any
                  number of tokens, depicted as black circles. A transition is
                  enabled if all places connected to it as inputs contain at
                  least one token. Some sources[1] state that Petri nets were
                  invented in August 1939 by Carl Adam Petri—at the age of
                  13—for the purpose of describing chemical processes. Like
                  industry standards such as UML activity diagrams, Business
                  Process Model and Notation, and event-driven process chains,
                  Petri nets offer a graphical notation for stepwise processes
                  that include choice, iteration, and concurrent execution.
                  Unlike these standards, Petri nets have an exact mathematical
                  definition of their execution semantics, with a well-developed
                  mathematical theory for process analysis[citation needed].
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6   ">
          <div className="intro-y box b h-full ">
            <div className="flex flex-col sm:flex-row items-center p-5 border-b  border-slate-200/60 dark:border-darkmode-400">
              <h2 className="font-medium text-base mr-auto ">
                Applications of Petri Nets
              </h2>
            </div>

            <div className="p-5 mt-2">
              <div className="  p-2 rounded-md mb-10 border-2 border-gray-300 hover:bg-[#f4f4f5]  ">
                <div className="flex items-center">
                  <div className="font-medium text-lg">
                    Rumours Detection and Blocking in OSNs
                  </div>
                  <div className="text-xs bg-white px-1 rounded-md text-slate-700 ml-auto cursor-pointer">
                    <BasicModal/>
                  </div>
                </div>
                <div className="mt-3">
                  Rumours Detection and Blocking in Online Social Networks
                  (OSNs) involves identifying and preventing the spread of false
                  information. Detection uses data collection, feature
                  extraction, and machine learning to classify content as
                  rumours, leveraging linguistic, user-based, and propagation
                  features.
                </div>
              </div>
              <div className=" mb-2 p-2 rounded-md border-2 border-gray-300 hover:bg-[#f4f4f5] ">
                <div className="flex items-center">
                  <div className="font-medium text-lg ">
                    {" "}
                    Workflow Management and Business Process Modeling
                  </div>
                  <div className="text-xs bg-white px-1 rounded-md text-slate-700 ml-auto">
                    <BasicModal2/>
                  </div>
                </div>
                <div className="mt-1">
                  <ul>
                    <li>Workflow Automation: Designing, analyzing, and optimizing workflows in business processes</li>
                    <br/>
                    <li>Process Validation: Ensuring that business processes are correctly specified and can be executed as intended.</li>
                  </ul>
                </div> {/* Missing closing div added here */}
              </div>
              {/* <div className="alert alert-warning show mb-2">
                <div className="flex items-center">
                  <div className="font-medium text-lg">
                    Nodes in chronological order!
                  </div>
                  <div className="text-xs bg-white px-1 rounded-md text-slate-700 ml-auto">
                    Hint
                  </div>
                </div>
                <div className="mt-3">
                  Places/Transitions are processed according to the order of
                  insertion on editor canvas.
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="intro-y grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 lg:col-span-6  ">
          <div className="intro-y box h-full">
            <div className="flex flex-col sm:flex-row items-center p-5 border-b   border-slate-200/60 dark:border-darkmode-400">
              <h2 className="font-medium text-base mr-auto">Types Of Petri Nets</h2>
            </div>
              <div>
                <img src="/images/Petri-Nets_Types.png" />
              </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 ">
          <div className="intro-y box h-full">
            <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <h2 className="font-medium text-base mr-auto">
                Website Feedback
              </h2>
            </div>
            <div className="p-5">
              <div className="text-center lg:text-left p-5">
                <div className="mb-3">
                  If you want to send me some feedbacks or to report bugs
                  <strong> fill the Google Form at the link below</strong>. This
                  tool is still under development and any suggestion will be
                  taken into account.
                </div>
                
              </div>
              <div className="flex items-center justify-center lg:justify-start text-primary underline mt-5">
                <ChevronRight className="w-5 h-5 mr-2" />
                <Link
                  to="#"
                  onClick={(e) => {
                    window.location.href =
                      "https://docs.google.com/forms/d/e/1FAIpQLSd67vcwhwwpaMps2RMoriv-hyBCyg4DFGyodreEjlD4LqE3KA/viewform";
                  }}
                >
                  https://docs.google.com/forms/d/e/1FAIpQLSd67vcwhwwpaMps2RMoriv-hyBCyg4DFGyodreEjlD4LqE3KA/viewform
                </Link>
                
              </div>
              
            </div>
            
          </div>
          <div className=" mt-4 right-0 text-right mr-1 ">Copyright @ 2024</div>
        </div>
        
      </div>
      
    </div>
  );
};
