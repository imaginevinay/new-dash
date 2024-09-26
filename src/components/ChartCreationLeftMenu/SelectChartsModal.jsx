import Modal from "@mui/joy/Modal";
import { useState } from "react";
import * as Styled from "./ChartCreationLeftMenu.styles";
import CloseIcon from "../../assets/icons/close.svg";
import { CHART_DATA_CONFIG } from "../../utils/config";

export default function SelectChartsModal({ open, handleClose }) {
  const [selectedCategory, setSelectedCategory] = useState(CHART_DATA_CONFIG[0]);
  const [selectedChartType, setSelectedChartType] = useState(CHART_DATA_CONFIG[0].types[0]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedChartType(null); // Reset chart type when category changes
  };

  const handleChartTypeSelect = (chartType) => {
    setSelectedChartType(chartType);
  };

  const handleSelectedCloseHandler = () => {
    handleClose(selectedCategory)
    setSelectedChartType(null);
    setSelectedChartType(null);
  }

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={() => handleClose(false)}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Styled.SheetWrapper>
        <Styled.Header>
          <span>Select Charts</span>
          <img
            src={CloseIcon}
            onClick={() => handleClose(false)}
            style={{ cursor: "pointer" }}
          />
        </Styled.Header>

        <Styled.Container>
          <Styled.CategoriesSection>
            <Styled.SectionTitle level="h6">Categories</Styled.SectionTitle>
            <Styled.CategoriesBox>
              {CHART_DATA_CONFIG.map((category) => (
                <Styled.CategoryItem
                  key={category.id}
                  onClick={() => handleCategorySelect(category)}
                  isSelected={selectedCategory?.id === category.id}
                >
                  <img src={category.icon} />
                  <span>{category.name}</span>
                </Styled.CategoryItem>
              ))}
            </Styled.CategoriesBox>
          </Styled.CategoriesSection>

          <Styled.ChartTypesSection>
            <Styled.SectionTitle level="h6">Chart Types</Styled.SectionTitle>
            <Styled.ChartTypeBox>
              {selectedCategory?.types.map((chartType) => (
                <Styled.ChartTypeItem
                  key={chartType.id}
                  onClick={() => handleChartTypeSelect(chartType)}
                  isSelected={selectedChartType?.id === chartType.id}
                >
                  <img src={chartType.icon} />
                  <span>{chartType.name}</span>
                </Styled.ChartTypeItem>
              ))}
            </Styled.ChartTypeBox>
          </Styled.ChartTypesSection>

          <Styled.PreviewSection>
            <Styled.SectionTitle level="h6">Preview</Styled.SectionTitle>
            <Styled.PreviewBox selectedChartType={selectedChartType}>
              {selectedChartType ? (
                <>
                  <Styled.PreviewHeader>
                    <span>{selectedChartType.name}</span>
                    <Styled.ApplyChart onClick={() => handleSelectedCloseHandler()}>Apply Chart</Styled.ApplyChart>
                  </Styled.PreviewHeader>
                  <Styled.Image
                    src={selectedChartType.previewImage}
                    alt={selectedChartType.name}
                  />
                </>
              ) : (
                <span className="nothing">
                  Nothing selected to view here...
                </span>
              )}
            </Styled.PreviewBox>
          </Styled.PreviewSection>
        </Styled.Container>
      </Styled.SheetWrapper>
    </Modal>
  );
}