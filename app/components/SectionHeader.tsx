import React, { Component, ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subTitle: string;
}

export default class SectionHeader extends Component<SectionHeaderProps> {
  render(): ReactNode {
    const { title, subTitle } = this.props;

    return (
      <div>
        <div>
          <div className="text-center my-4 w-[600px] mx-auto pt-[70px] pb-[70px]">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-gray-400 w-[600px] mt-4">{subTitle}</p>
          </div>
        </div>
      </div>
    );
  }
}