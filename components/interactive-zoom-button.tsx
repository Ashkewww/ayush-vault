'use client'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

export default function InteractiveZoomImage({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-fit flex items-center justify-center">
            <TransformWrapper doubleClick={{
                mode: "reset"
            }}
                centerOnInit
                smooth

            >
                <TransformComponent>
                    {children}
                </TransformComponent>
            </TransformWrapper>
        </div>
    )
}
