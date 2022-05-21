import { FC, PropsWithChildren, ReactNode } from 'react';

interface propsheader {
  children: ReactNode;
}

const ContentBox: FC<PropsWithChildren<propsheader>> = ({ children }) => {
  return (
    <main className="w-full">
      <div className="py-4 w-full flex justify-center">
        <div className="w-11/12 xl:w-5/6 p-4 xl:p-12 flex flex-col gap-6 bg-box rounded-md min-height-contet-box">
          {children}
        </div>
      </div>
    </main>
  );
};

export default ContentBox;
