import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import {
  useGLTF,
  Stage,
  PresentationControls,
  Center,
} from "@react-three/drei";
import { Box, Modal, Typography } from "@mui/material";
import skeletonBones from "../data/skeleton_data.json";

function Model({ onBoneClick, setAnchorEl, ...props }) {
  const { scene } = useGLTF("/skeleton.glb");

  return (
    <primitive
      object={scene}
      {...props}
      onClick={(e) => {
        e.stopPropagation();
        const meshName = e.object.name;
        const parentName = e.object.parent?.name;

        const boneData = skeletonBones.find(
          (b) => b.name === meshName || b.name === parentName,
        );

        if (boneData) {
          onBoneClick(boneData.name);
          setAnchorEl(e.nativeEvent.target);
        }
      }}
    />
  );
}

function SkeletonAnatomy() {
  const [selectedBone, setSelectedBone] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverClose = () => {
    setSelectedBone(null);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const boneDataActive = skeletonBones.find(
    (bone) => bone.name === selectedBone,
  );

  return (
    <Box sx={{ height: "80vh", width: "50vw", mx: "auto" }}>
      <Typography
        className="skeleton_heading"
        sx={{
          fontWeight: "bold",
          lineHeight: 1.5,
          textAlign: "center",
          fontSize: 30,
          textTransform: "uppercase",
        }}
      >
        The Anatomy of a Career Pivot
      </Typography>
      <Typography
        className="skeleton_heading"
        sx={{
          fontWeight: "bold",
          lineHeight: 1.5,
          textAlign: "center",
          fontSize: 20,
          textTransform: "uppercase",
        }}
      >
        Click the bones to explore how I moved from the classroom to the
        codebase.
      </Typography>
      <Canvas gl={{ exposure: 0.5 }} dpr={[1, 2]} shadows camera={{ fov: 45 }}>
        <Suspense fallback={null}>
          <PresentationControls speed={2} zoom={1.5}>
            <Stage environment="night" intensity={0.5}>
              <Model onBoneClick={setSelectedBone} setAnchorEl={setAnchorEl} />
            </Stage>
          </PresentationControls>
        </Suspense>
      </Canvas>

      <Modal open={open} onClose={handlePopoverClose}>
        <Box
          sx={{
            bgcolor: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            p: 4,
          }}
          className="skeleton_box"
        >
          {boneDataActive ? (
            <>
              <Typography
                className="skeleton_heading"
                variant="h6"
                sx={{ textAlign: "center" }}
              >
                {boneDataActive.heading}
              </Typography>
              <Typography sx={{ mt: 2, textAlign: "center" }}>
                {boneDataActive.description}
              </Typography>
            </>
          ) : (
            <Typography>Data not found for this section.</Typography>
          )}
        </Box>
      </Modal>
    </Box>
  );
}

export default SkeletonAnatomy;
