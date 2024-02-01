from _typeshed import Incomplete
from typing_extensions import Final, TypeAlias

import _win32typing
from win32com.client import dynamic as dynamic, gencache as gencache

_Stringifiable: TypeAlias = object

def GetObject(Pathname: str | None = ..., Class: Incomplete | None = ..., clsctx: Incomplete | None = ...) -> CDispatch: ...
def GetActiveObject(Class, clsctx=...): ...
def Moniker(Pathname, clsctx=...): ...
def Dispatch(
    dispatch: str | dynamic.PyIDispatchType | dynamic._GoodDispatchTypes | dynamic.PyIUnknownType,
    userName: str | None = ...,
    resultCLSID: _Stringifiable | None = ...,
    typeinfo: _win32typing.PyITypeInfo | None = ...,
    UnicodeToString: None = None,
    clsctx: int = ...,
) -> dynamic.CDispatch: ...
def DispatchEx(
    clsid,
    machine: Incomplete | None = ...,
    userName: Incomplete | None = ...,
    resultCLSID: Incomplete | None = ...,
    typeinfo: Incomplete | None = ...,
    UnicodeToString: None = None,
    clsctx: Incomplete | None = ...,
): ...

class CDispatch(dynamic.CDispatch):
    def __dir__(self): ...

def CastTo(ob, target, typelib: Incomplete | None = ...): ...

class Constants:
    __dicts__: Incomplete
    def __getattr__(self, a: str): ...

constants: Final[Constants]

class EventsProxy:
    def __init__(self, ob) -> None: ...
    def __del__(self) -> None: ...
    def __getattr__(self, attr: str): ...
    def __setattr__(self, attr: str, val) -> None: ...

def DispatchWithEvents(clsid, user_event_class): ...
def WithEvents(disp, user_event_class): ...
def getevents(clsid): ...
def Record(name, object): ...

class DispatchBaseClass:
    def __init__(self, oobj: Incomplete | None = ...) -> None: ...
    def __dir__(self): ...
    def __eq__(self, other): ...
    def __ne__(self, other): ...
    def __getattr__(self, attr: str): ...
    def __setattr__(self, attr: str, value) -> None: ...

class CoClassBaseClass:
    def __init__(self, oobj: Incomplete | None = ...) -> None: ...
    def __getattr__(self, attr: str): ...
    def __setattr__(self, attr: str, value) -> None: ...
    def __maybe__call__(self, *args, **kwargs): ...
    def __maybe__str__(self, *args): ...
    def __maybe__int__(self, *args): ...
    def __maybe__iter__(self): ...
    def __maybe__len__(self): ...
    def __maybe__nonzero__(self): ...

class VARIANT:
    varianttype: Incomplete
    def __init__(self, vt, value) -> None: ...
    value: Incomplete
