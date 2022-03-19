export const AgCatColumnDefs = [
  { field: "id", sortable: true, maxWidth: 90 },
  {
    field: "image",
    sortable: false,
    cellRenderer: (params: any) => {
      return (
        <a href={params.value} target="_blank">
          <img className="cat-image" src={params.value} />
        </a>
      );
    },
    cellStyle: { padding: "8px 5px " },
    maxWidth: 90,
  },
  {
    field: "name",
    sortable: true,
    cellStyle: { padding: "10px" },
  },
  { field: "description", sortable: false, cellStyle: { padding: "10px" } },
  {
    field: "cfa_url",
    sortable: true,
    cellStyle: { padding: "10px" },
    headerName: "CFA",
    cellRenderer: (params: any) => {
      return (
        <a href={params.value} target="_blank">
          {params.value}
        </a>
      );
    },
  },
  {
    field: "vetstreet_url",
    sortable: true,
    cellStyle: { padding: "10px" },
    headerName: "Vetstreet",
    cellRenderer: (params: any) => {
      return (
        <a href={params.value} target="_blank">
          {params.value}
        </a>
      );
    },
  },
  {
    field: "vcahospitals_url",
    sortable: true,
    headerName: "Vcahospitals",
    cellStyle: { padding: "10px" },
    cellRenderer: (params: any) => {
      return (
        <a href={params.value} target="_blank">
          {params.value}
        </a>
      );
    },
  },
  {
    field: "weight_imperial",
    sortable: true,
    cellStyle: { padding: "10px" },
    maxWidth: 140,
    headerName: "Weight Imperial",
  },
  {
    field: "weight_metric",
    sortable: true,
    maxWidth: 140,
    cellStyle: { padding: "10px" },
    headerName: "Weight Metric",
  },
  { field: "temperament", sortable: true, cellStyle: { padding: "10px" } },
  {
    field: "country_code",
    sortable: true,
    cellStyle: { padding: "10px" },
    headerName: "Country Code",
    maxWidth: 150,
  },
  {
    field: "life_span",
    sortable: true,
    maxWidth: 120,
    headerName: "Life Span",
    cellStyle: { padding: "10px" },
  },
  {
    field: "indoor",
    sortable: true,
    maxWidth: 90,
    cellStyle: { padding: "10px" },
  },
  {
    field: "lap",
    sortable: true,
    maxWidth: 90,
    cellStyle: { padding: "10px" },
  },
  {
    field: "alt_names",
    sortable: true,
    cellStyle: { padding: "10px" },
    headerName: "Alt Names",
  },
  {
    field: "adaptability",
    sortable: true,
    cellStyle: { padding: "10px" },
    maxWidth: 120,
  },
  {
    field: "affection_level",
    sortable: true,
    cellStyle: { padding: "10px" },
    headerName: "Affection Level",
    maxWidth: 140,
  },
  {
    field: "child_friendly",
    sortable: true,
    cellStyle: { padding: "10px" },
    headerName: "Child Friendly",
  },
  {
    field: "dog_friendly",
    sortable: true,
    cellStyle: { padding: "10px" },
    headerName: "Dog Friendly",
  },
  {
    field: "energy_level",
    sortable: true,
    cellStyle: { padding: "10px" },
    headerName: "Energy Level",
  },
  { field: "grooming", sortable: true, cellStyle: { padding: "10px" } },
  {
    field: "health_issues",
    sortable: true,
    cellStyle: { padding: "10px" },
    headerName: "Health Issues",
  },
  { field: "intelligence", sortable: true, cellStyle: { padding: "10px" } },
  {
    field: "shedding_level",
    sortable: true,
    cellStyle: { padding: "10px" },
    headerName: "Shedding Level",
  },
  {
    field: "social_needs",
    sortable: true,
    cellStyle: { padding: "10px" },
    headerName: "Social Needs",
  },
  {
    field: "stranger_friendly",
    sortable: true,
    cellStyle: { padding: "10px" },
    headerName: "Stranger Friendly",
  },
  { field: "vocalisation", sortable: true, cellStyle: { padding: "10px" } },
  { field: "experimental", sortable: true, cellStyle: { padding: "10px" } },
  { field: "hairless", sortable: true, cellStyle: { padding: "10px" } },
  { field: "natural", sortable: true, cellStyle: { padding: "10px" } },
  { field: "rare", sortable: true, cellStyle: { padding: "10px" } },
  { field: "rex", sortable: true, cellStyle: { padding: "10px" } },
  {
    field: "suppressed_tail",
    sortable: true,
    cellStyle: { padding: "10px" },
    headerName: "Suppressed Tail",
  },
  {
    field: "short_legs",
    sortable: true,
    cellStyle: { padding: "10px" },
    headerName: "Short Legs",
  },
  {
    field: "wikipedia_url",
    sortable: true,
    cellStyle: { padding: "10px" },
    headerName: "Wikipedia",
    cellRenderer: (params: any) => {
      return (
        <a href={params.value} target="_blank">
          {params.value}
        </a>
      );
    },
  },
  { field: "hypoallergenic", sortable: true, cellStyle: { padding: "10px" } },
  {
    field: "reference_image_id",
    sortable: true,
    headerName: "Ref Img Id",
    cellStyle: { padding: "10px" },
  },
];
