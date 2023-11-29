
positions = {
    "ranger-stop1" : [99, 123],
    "gate2" : [123, 267],
    "entrance1" : [90, 333],
    "ranger-stop4" : [93, 469],
    "entrance0" : [309, 69],
    "general-gate1" : [319, 128],
    "gate0" : [313, 169],
    "camping0" : [260, 206],
    "gate1" : [289, 221],
    "camping2" : [221, 319],
    "camping3" : [225, 338],
    "camping4" : [240, 439],
    "ranger-stop2" : [397, 177],
    "ranger-stop0" : [427, 85],
    "general-gate4" : [341, 482],
    "general-gate0" : [543, 49],
    "general-gate2" : [513, 163],
    "camping1" : [635, 249],
    "general-gate5": [610, 545],
    "ranger-stop3" : [727, 224],
    "gate3" : [731, 297],
    "camping8" : [897, 240],
    "general-gate3" : [913, 273],
    "entrance2" : [897, 430],
    "gate4" : [807, 560],
    "ranger-stop5" : [741, 579],
    "general-gate6" : [669, 673],
    "general-gate7" : [322, 709],
    "ranger-stop6" : [606, 723],
    "gate5" : [644, 715],
    "camping7" : [888, 715],
    "ranger-stop7" : [493, 747],
    "gate6" : [571, 741],
    "gate7" : [478, 785],
    "entrance3" : [566, 819],
    "ranger-base" : [628, 857],
    "gate8" : [679, 887],
    "entrance4" : [688, 901],
    "camping6" : [736, 868],
    "camping5" : [105, 595],
    "ranger-stop4" : [93, 469]
}



data = {
    "nodes": [
      {
        "id": "camping0",
        "name": "camping0"
      },
      {
        "id": "camping1",
        "name": "camping1"
      },
      {
        "id": "camping2",
        "name": "camping2"
      },
      {
        "id": "camping3",
        "name": "camping3"
      },
      {
        "id": "camping4",
        "name": "camping4"
      },
      {
        "id": "camping5",
        "name": "camping5"
      },
      {
        "id": "camping6",
        "name": "camping6"
      },
      {
        "id": "camping7",
        "name": "camping7"
      },
      {
        "id": "camping8",
        "name": "camping8"
      },
      {
        "id": "entrance0",
        "name": "entrance0"
      },
      {
        "id": "entrance1",
        "name": "entrance1"
      },
      {
        "id": "entrance2",
        "name": "entrance2"
      },
      {
        "id": "entrance3",
        "name": "entrance3"
      },
      {
        "id": "entrance4",
        "name": "entrance4"
      },
      {
        "id": "gate0",
        "name": "gate0"
      },
      {
        "id": "gate1",
        "name": "gate1"
      },
      {
        "id": "gate2",
        "name": "gate2"
      },
      {
        "id": "gate3",
        "name": "gate3"
      },
      {
        "id": "gate4",
        "name": "gate4"
      },
      {
        "id": "gate5",
        "name": "gate5"
      },
      {
        "id": "gate6",
        "name": "gate6"
      },
      {
        "id": "gate7",
        "name": "gate7"
      },
      {
        "id": "gate8",
        "name": "gate8"
      },
      {
        "id": "general-gate0",
        "name": "general-gate0"
      },
      {
        "id": "general-gate1",
        "name": "general-gate1"
      },
      {
        "id": "general-gate2",
        "name": "general-gate2"
      },
      {
        "id": "general-gate3",
        "name": "general-gate3"
      },
      {
        "id": "general-gate4",
        "name": "general-gate4"
      },
      {
        "id": "general-gate5",
        "name": "general-gate5"
      },
      {
        "id": "general-gate6",
        "name": "general-gate6"
      },
      {
        "id": "general-gate7",
        "name": "general-gate7"
      },
      {
        "id": "ranger-base",
        "name": "ranger-base"
      },
      {
        "id": "ranger-stop0",
        "name": "ranger-stop0"
      },
      {
        "id": "ranger-stop1",
        "name": "ranger-stop1"
      },
      {
        "id": "ranger-stop2",
        "name": "ranger-stop2"
      },
      {
        "id": "ranger-stop3",
        "name": "ranger-stop3"
      },
      {
        "id": "ranger-stop4",
        "name": "ranger-stop4"
      },
      {
        "id": "ranger-stop5",
        "name": "ranger-stop5"
      },
      {
        "id": "ranger-stop6",
        "name": "ranger-stop6"
      },
      {
        "id": "ranger-stop7",
        "name": "ranger-stop7"
      }
    ],
    "links": [
      {
        "source": "entrance1",
        "target": "gate2"
      },
      {
        "source": "gate2",
        "target": "ranger-stop1"
      },
      {
        "source": "gate2",
        "target": "camping2"
      },
      {
        "source": "entrance1",
        "target": "camping2"
      },
      {
        "source": "entrance1",
        "target": "camping4"
      },
      {
        "source": "camping4",
        "target": "camping3"
      },
      {
        "source": "camping3",
        "target": "camping0"
      },
      {
        "source": "camping4",
        "target": "camping0"
      },
      {
        "source": "camping0",
        "target": "gate1"
      },
      {
        "source": "camping3",
        "target": "gate1"
      },
      {
        "source": "gate1",
        "target": "gate0"
      },
      {
        "source": "gate0",
        "target": "general-gate1"
      },
      {
        "source": "gate0",
        "target": "entrance0"
      },
      {
        "source": "entrance0",
        "target": "general-gate1"
      },
      {
        "source": "general-gate1",
        "target": "ranger-stop2"
      },
      {
        "source": "ranger-stop2",
        "target": "ranger-stop0"
      },
      {
        "source": "ranger-stop0",
        "target": "general-gate2"
      },
      {
        "source": "general-gate2",
        "target": "general-gate0"
      },
      {
        "source": "general-gate2",
        "target": "camping1"
      },
      {
        "source": "general-gate0",
        "target": "camping1"
      },
      {
        "source": "general-gate2",
        "target": "gate3"
      },
      {
        "source": "general-gate0",
        "target": "gate3"
      },
      {
        "source": "general-gate2",
        "target": "camping8"
      },
      {
        "source": "general-gate0",
        "target": "camping8"
      },
      {
        "source": "camping1",
        "target": "gate3"
      },
      {
        "source": "camping1",
        "target": "camping8"
      },
      {
        "source": "general-gate2",
        "target": "general-gate5"
      },
      {
        "source": "general-gate0",
        "target": "general-gate5"
      },
      {
        "source": "camping1",
        "target": "general-gate5"
      },
      {
        "source": "gate3",
        "target": "general-gate5"
      },
      {
        "source": "gate3",
        "target": "ranger-stop3"
      },
      {
        "source": "camping8",
        "target": "general-gate5"
      },
      {
        "source": "camping8",
        "target": "general-gate3"
      },
      {
        "source": "general-gate3",
        "target": "general-gate3"
      },
      {
        "source": "general-gate3",
        "target": "entrance2"
      },
      {
        "source": "general-gate5",
        "target": "entrance2"
      },
      {
        "source": "general-gate2",
        "target": "entrance2"
      },
      {
        "source": "gate4",
        "target": "ranger-stop5"
      },
      {
        "source": "gate4",
        "target": "entrance2"
      },
      {
        "source": "gate4",
        "target": "general-gate3"
      },
      {
        "source": "gate4",
        "target": "gate3"
      },
      {
        "source": "gate4",
        "target": "camping1"
      },
      {
        "source": "gate4",
        "target": "general-gate2"
      },
      {
        "source": "gate4",
        "target": "general-gate0"
      },
      {
        "source": "gate4",
        "target": "general-gate5"
      },
      {
        "source": "gate4",
        "target": "general-gate6"
      },
      {
        "source": "general-gate5",
        "target": "general-gate6"
      },
      {
        "source": "entrance2",
        "target": "general-gate6"
      },
      {
        "source": "gate4",
        "target": "general-gate6"
      },
      {
        "source": "general-gate3",
        "target": "general-gate6"
      },
      {
        "source": "camping1",
        "target": "general-gate6"
      },
      {
        "source": "general-gate2",
        "target": "general-gate6"
      },
      {
        "source": "gate3",
        "target": "general-gate6"
      },
      {
        "source": "camping7",
        "target": "general-gate6"
      },
      {
        "source": "gate5",
        "target": "general-gate6"
      },
      {
        "source": "ranger-stop6",
        "target": "gate5"
      },
      {
        "source": "ranger-stop6",
        "target": "gate6"
      },
      {
        "source": "camping6",
        "target": "gate5"
      },
      {
        "source": "entrance4",
        "target": "gate5"
      },
      {
        "source": "gate8",
        "target": "gate5"
      },
      {
        "source": "ranger-base",
        "target": "gate8"
      },
      {
        "source": "entrance4",
        "target": "gate8"
      },
      {
        "source": "entrance3",
        "target": "gate6"
      },
      {
        "source": "general-gate4",
        "target": "gate6"
      },
      {
        "source": "gate0",
        "target": "gate6"
      },
      {
        "source": "gate7",
        "target": "gate6"
      },
      {
        "source": "gate7",
        "target": "ranger-stop7"
      },
      {
        "source": "gate7",
        "target": "general-gate7"
      },
      {
        "source": "general-gate7",
        "target": "gate7"
      },
      {
        "source": "camping5",
        "target": "general-gate7"
      },
      {
        "source": "ranger-stop4",
        "target": "general-gate7"
      },
      {
        "source": "ranger-stop4",
        "target": "camping5"
      },
      {
        "source": "entrance3",
        "target": "general-gate1"
      },
      {
        "source": "entrance1",
        "target": "general-gate7"
      },
      {
        "source": "general-gate4",
        "target": "general-gate7"
      },
      {
        "source": "general-gate4",
        "target": "general-gate1"
      },
      {
        "source": "entrance3",
        "target": "general-gate7"
      },
      {
        "source": "entrance2",
        "target": "camping6"
      },
      {
        "source": "general-gate5",
        "target": "camping6"
      },
      {
        "source": "general-gate7",
        "target": "camping2"
      },
      {
        "source": "general-gate7",
        "target": "camping3"
      },
      {
        "source": "general-gate7",
        "target": "camping0"
      },
      {
        "source": "general-gate5",
        "target": "entrance4"
      },
      {
        "source": "general-gate5",
        "target": "gate8"
      },
      {
        "source": "gate3",
        "target": "camping8"
      },
      {
        "source": "gate4",
        "target": "gate5"
      },
      {
        "source": "entrance4",
        "target": "general-gate6"
      },
      {
        "source": "entrance0",
        "target": "general-gate4"
      },
      {
        "source": "gate5",
        "target": "general-gate5"
      },
      {
        "source": "gate4",
        "target": "gate8"
      },
      {
        "source": "camping4",
        "target": "general-gate7"
      },
      {
        "source": "gate7",
        "target": "general-gate4"
      },
      {
        "source": "gate6",
        "target": "general-gate7"
      },
      {
        "source": "gate2",
        "target": "general-gate7"
      },
      {
        "source": "camping3",
        "target": "entrance1"
      },
      {
        "source": "camping0",
        "target": "entrance1"
      },
      {
        "source": "camping6",
        "target": "entrance4"
      },
      {
        "source": "gate8",
        "target": "general-gate6"
      },
      {
        "source": "camping4",
        "target": "camping2"
      },
      {
        "source": "camping4",
        "target": "gate1"
      },
      {
        "source": "gate2",
        "target": "gate1"
      },
      {
        "source": "entrance2",
        "target": "camping1"
      },
      {
        "source": "gate8",
        "target": "camping6"
      },
      {
        "source": "gate1",
        "target": "camping2"
      },
      {
        "source": "gate2",
        "target": "camping4"
      },
      {
        "source": "camping3",
        "target": "camping2"
      },
      {
        "source": "camping0",
        "target": "camping2"
      },
      {
        "source": "camping0",
        "target": "gate2"
      },
      {
        "source": "camping3",
        "target": "gate2"
      },
      {
        "source": "general-gate1",
        "target": "gate6"
      },
      {
        "source": "general-gate4",
        "target": "gate0"
      },
      {
        "source": "camping6",
        "target": "gate4"
      },
      {
        "source": "general-gate4",
        "target": "entrance3"
      },
      {
        "source": "camping6",
        "target": "general-gate6"
      }
    ]
  }