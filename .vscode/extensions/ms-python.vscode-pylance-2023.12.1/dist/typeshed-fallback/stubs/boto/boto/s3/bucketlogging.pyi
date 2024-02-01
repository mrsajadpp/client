from _typeshed import Incomplete
from typing import Any

class BucketLogging:
    target: Any
    prefix: Any
    grants: Any
    def __init__(
        self, target: Incomplete | None = None, prefix: Incomplete | None = None, grants: Incomplete | None = None
    ) -> None: ...
    def add_grant(self, grant): ...
    def startElement(self, name, attrs, connection): ...
    def endElement(self, name, value, connection): ...
    def to_xml(self): ...
