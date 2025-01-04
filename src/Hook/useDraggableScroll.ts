import { useEffect, useRef, useMemo, ForwardedRef } from 'react'
import { mergeRefs } from 'react-merge-refs-ahhh-test'
import { Platform, findNodeHandle } from 'react-native'
import type { FlatList } from 'react-native'

type Props<Scrollable extends FlatList = FlatList> = {
  cursor?: string
  outerRef?: ForwardedRef<Scrollable>
}


export function useDraggableScroll<Scrollable extends FlatList = FlatList>({
  outerRef,
  cursor = 'grab',
}: Props<FlatList> = {}) {
  const ref = useRef<Scrollable>(null)

  useEffect(() => {
    if (Platform.OS !== 'web' || !ref.current) {
      return
    }
    const slider = (findNodeHandle(ref.current) as unknown) as HTMLDivElement
    if (!slider) {
      return
    }
    let isDragging = false
    let isMouseDown = false
    let startX = 0
    let scrollLeft = 0

    const mouseDown = (e: MouseEvent) => {
      isMouseDown = true
      startX = e.pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft

      slider.style.cursor = cursor
    }

    const mouseUp = () => {
      if (isDragging) {
        const preventClick = (e: any) => {
          e.preventDefault();
          e.stopPropagation();
        };

        let items = slider.querySelectorAll('a')

        if (!items.length) {
          slider.addEventListener('click', (e) => preventClick, { once: true });
        } else {
          items.forEach((link) => {
            link.addEventListener(
              'click',
              (e) => {
                preventClick(e);
                link.removeEventListener('click', preventClick); // Remove listener immediately after firing
              },
              { once: true }
            );
          });
        }

      }

      isMouseDown = false
      isDragging = false
      slider.style.cursor = 'default'
    }

    const mouseMove = (e: MouseEvent) => {
      if (!isMouseDown) return

      // Require n pixels momement before start of drag (5 in this case )
      const x = e.pageX - slider.offsetLeft
      if (Math.abs(x - startX) < 5) return

      isDragging = true
      e.preventDefault()
      const walk = x - startX
      slider.scrollLeft = scrollLeft - walk
    }

    slider.addEventListener('mousedown', mouseDown)
    window.addEventListener('mouseup', mouseUp)
    window.addEventListener('mousemove', mouseMove)

    return () => {
      slider.removeEventListener('mousedown', mouseDown)
      window.removeEventListener('mouseup', mouseUp)
      window.removeEventListener('mousemove', mouseMove)
    }
  },
    [cursor]
  )

  const refs = useMemo(() => mergeRefs(outerRef ? [ref, outerRef] : [ref]), [
    ref,
    outerRef,
  ])

  return {
    refs,
  }
}