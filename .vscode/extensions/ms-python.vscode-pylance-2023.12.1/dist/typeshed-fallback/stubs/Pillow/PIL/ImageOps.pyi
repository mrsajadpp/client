from _typeshed import Incomplete
from collections.abc import Iterable
from typing import Protocol
from typing_extensions import TypeAlias

from .Image import Image, Resampling, _Resample, _Size
from .ImageColor import _Ink

_Border: TypeAlias = int | tuple[int, int] | tuple[int, int, int, int]

class _Deformer(Protocol):
    def getmesh(self, __image: Image): ...

def autocontrast(
    image: Image, cutoff: int = 0, ignore: int | None = None, mask: Image | None = None, preserve_tone: bool = False
) -> Image: ...
def colorize(
    image: Image,
    black: int | str,
    white: int | str,
    mid: int | str | None = None,
    blackpoint: int = 0,
    whitepoint: int = 255,
    midpoint: int = 127,
) -> Image: ...
def contain(image: Image, size: _Size, method: Resampling | _Resample = ...) -> Image: ...
def cover(image: Image, size: _Size, method: Resampling | _Resample = ...) -> Image: ...
def pad(
    image: Image,
    size: _Size,
    method: Resampling | _Resample = ...,
    color: Incomplete | None = None,
    centering: Iterable[float] = (0.5, 0.5),
) -> Image: ...
def crop(image: Image, border: _Border = 0) -> Image: ...
def scale(image: Image, factor: float, resample: Resampling | _Resample = ...) -> Image: ...
def deform(image: Image, deformer: _Deformer, resample: Resampling | _Resample = ...) -> Image: ...
def equalize(image: Image, mask: Incomplete | None = None) -> Image: ...
def expand(image: Image, border: _Border = 0, fill: _Ink = 0) -> Image: ...
def fit(
    image: Image, size: _Size, method: Resampling | _Resample = ..., bleed: float = 0.0, centering: Iterable[float] = (0.5, 0.5)
) -> Image: ...
def flip(image: Image) -> Image: ...
def grayscale(image: Image) -> Image: ...
def invert(image: Image) -> Image: ...
def mirror(image: Image) -> Image: ...
def posterize(image: Image, bits: int) -> Image: ...
def solarize(image: Image, threshold: int = 128) -> Image: ...
def exif_transpose(image: Image, *, in_place: bool = False) -> Image: ...
