"use client";

import React, { useState, type ComponentType } from 'react';
import { AnimatePresence } from 'motion/react';
import * as m from 'motion/react-m';

export interface TabData {
  id: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  content: React.ReactNode;
}

export interface BentoProtrusionProps {
  leftTabs: TabData[];
  rightTabs: TabData[];
  className?: string;
}

export function BentoProtrusion({ leftTabs, rightTabs, className = "" }: BentoProtrusionProps) {
  const [activeLeft, setActiveLeft] = useState(0);
  const [activeRight, setActiveRight] = useState(0);

  const renderContent = (tab: TabData) => (
    <m.div
      key={tab.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="h-full w-full"
    >
      <div className="relative h-full w-full font-mono text-sm text-muted-foreground rounded-3xl overflow-hidden">
        {typeof tab.content === 'string' ? (
          <pre className="whitespace-pre-wrap break-all leading-relaxed p-4 sm:p-5 lg:p-6">{tab.content}</pre>
        ) : (
          tab.content
        )}
      </div>
    </m.div>
  );

  const renderTabs = (tabs: TabData[], activeIndex: number, setActiveIndex: (i: number) => void) => (
    <div className="flex gap-2 sm:gap-4 -mb-px pl-0 pr-6 sm:pr-8 relative z-20">
      {tabs.map((tab, idx) => {
        const Icon = tab.icon;
        const isActive = activeIndex === idx;
        const isFirst = idx === 0;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveIndex(idx)}
            aria-pressed={isActive}
            className={`
              relative group flex flex-col items-center justify-center gap-1.5
              w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-t-3xl transition-all duration-300 outline-none
              ${isActive ? 'bg-card cursor-default' : 'bg-transparent hover:bg-card/30 rounded-b-3xl cursor-pointer'}
            `}
          >
            <Icon className={`w-8 h-8 md:w-10 md:h-10 transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'}`} />
            <span className={`text-[10px] sm:text-xs font-medium transition-colors ${isActive ? 'text-foreground' : 'text-muted-foreground/60 group-hover:text-muted-foreground'}`}>
              {tab.label}
            </span>

            {isActive && (
              <>
                {/* Left scoop - only if not the first tab */}
                {!isFirst && (
                  <div className="absolute bottom-0 -left-6 w-6 h-6 pointer-events-none">
                    <div className="absolute inset-0 bg-card" />
                    <div className="absolute inset-0 bg-background rounded-br-3xl" />
                  </div>
                )}
                {/* Right scoop */}
                <div className="absolute bottom-0 -right-6 w-6 h-6 pointer-events-none">
                  <div className="absolute inset-0 bg-card" />
                  <div className="absolute inset-0 bg-background rounded-bl-3xl" />
                </div>
              </>
            )}
          </button>
        );
      })}
    </div>
  );

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-8 pt-8 sm:pt-12 ${className}`}>
      {/* Left Column */}
      <div className="flex flex-col relative">
        {renderTabs(leftTabs, activeLeft, setActiveLeft)}
        <div className={`
          flex-1 bg-card rounded-3xl min-h-[420px] sm:min-h-[520px] lg:min-h-[580px] relative shadow-2xl shadow-black/30
          ${activeLeft === 0 ? 'rounded-tl-none' : ''}
        `}>
          <AnimatePresence mode="wait">
            {renderContent(leftTabs[activeLeft])}
          </AnimatePresence>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col relative">
        {renderTabs(rightTabs, activeRight, setActiveRight)}
        <div className={`
          flex-1 bg-card rounded-3xl min-h-[420px] sm:min-h-[520px] lg:min-h-[580px] relative shadow-2xl shadow-black/30
          ${activeRight === 0 ? 'rounded-tl-none' : ''}
        `}>
          <AnimatePresence mode="wait">
            {renderContent(rightTabs[activeRight])}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
